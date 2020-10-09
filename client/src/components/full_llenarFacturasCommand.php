<?php

namespace Bsvv\usuariosBundle\Command;

use Bsvv\plataformaBundle\Controller\Api;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Bsvv\plataformaBundle\Entity\facturas;
use Bsvv\plataformaBundle\Entity\tablaUF;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Console\Style\SymfonyStyle;


class full_llenarFacturasCommand extends ContainerAwareCommand
{
    /**
     * {@inheritdoc}
     */
    protected function configure ()
    {
        $this
            -> setName('bsvvusuarios:llenar:facturas:full')
            -> setDescription('Llena facturas FULL ');
    }


    public function getToken(){

        $params = array('user' => '12345678 - 9',
            'password' =>'Integraciones.123',
            'app_key' => 'recursiva'
        );
        $api = new Api();
        $resp = $api->apitoken('login' ,   $params);
        return $resp->auth_token;

    }

    /**
     * {@inheritdoc}
     */
    protected function execute (InputInterface $input, OutputInterface $output)
    {
        $io = new SymfonyStyle($input, $output);

        $em         = $this->getContainer()->get('doctrine')->getManager();
        $connection = $em->getConnection();
        $token      = $this->getToken();
        $em->getConnection()->exec('SET FOREIGN_KEY_CHECKS= 0;');
        $em->getConnection()->exec('truncate facturas ');
        //$em->getConnection()->exec('truncate facturas ');

        

        $api      = new Api();
        
        $hoy = $api->haceXdias(1,'+');
        $hace = 365*21;
        $fecha_desde = $api->haceXdias($hace,'-');
        $clientes_delete_query = "Delete from facturas where date BETWEEN '".$fecha_desde."' AND '".$hoy."'";

        $q = $em -> getConnection() -> prepare($clientes_delete_query);
        $q -> execute();

        sleep(2);
        $i = 1;
       
        $facturas = $api->apiget("billing_documents" , array('page' => 1, 'page_size' => '3000', 'q[created_at_gt]' => $fecha_desde) , $token); //billing_documents/:id_project
        while(count($facturas) != 0){
            foreach($facturas as $fac){
                try {
                   $billing_document = $api->apiget("billing_documents/".$fac->id , array('page' => 1, 'page_size' => '3000' ) , $token); //billing_documents/:id_project
        
                   $factura_new = new facturas();
                   $factura_new->setProjectId($billing_document->projects[0]);

                   $project = $api->apiget("projects/".$billing_document->projects[0] , array('page' => 1, 'page_size' => '3000' ) , $token); //billing_documents/:id_project
                   //
                   if($project == null){
                       continue;
                   }

                   if($billing_document->subtotal_without_discount == 0){
                       continue;
                   }
                   
                   $factura_new->setProjectCode($project->code);
                   $factura_new->setName($billing_document->client_business_name." - ".$billing_document->fees_description);
                   $factura_new->setNumber($billing_document->number);
                   $factura_new->setDate(new \DateTime($billing_document->date));
                   $factura_new->setType($billing_document->type_code);
                   $factura_new->setCurrency("UF");

                   $fecha = new \DateTime($factura_new->getDate()->format('Y-m-d'));
                   $i = 0;
                   $obj = null;

                   while($obj == null){
                    $fecha->modify('-'.$i.' day');
                    $obj = $em->getRepository('BsvvplataformaBundle:tablaUF')->findOneBy(array('date' => $fecha ));
                    $i++;
                   }
                   
                   
                   $amount = 0;

                    if($billing_document->currency_symbol == "CLP"){
                        $amount = $billing_document->subtotal_without_discount / $obj->getUfClp();

                    } else if($billing_document->currency_symbol == "USD"){
                        $amount = $billing_document->subtotal_without_discount / $obj->getDolarClp();


                    } else if($billing_document->currency_symbol == "UF") {
                        $amount = $billing_document->subtotal_without_discount;
                    } else {
                        $amount = 0;
                    }
                   
                   
                   if($billing_document->type_code == "NC"){
                       $factura_new->setAmount($amount *-1);
                   } else {
                       $factura_new->setAmount($amount);
                   }

                   dump($factura_new);

                   $em->persist($factura_new);
                   $em -> flush();
                   $em -> clear();
                   $cont++;
                   $io->success(' <fg=green>registros guardados \n  '.$cont.' 🍺 </> ');
                   $io->newLine(1);
               }catch (\Exception $ex) {

                   $output->writeln( "Exception Found - " . $ex->getMessage() . "<br/>");
               }

           }

           $i++;
           $facturas = $api->apiget("billing_documents" , array('page' => $i, 'page_size' => '3000', 'q[created_at_gt]' => $fecha_desde) , $token); //billing_documents/:id_project

        }    
        

            $output->writeln('final');
    }   


        
    
}
