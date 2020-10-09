import React from 'react'

const ThreeRows = ({socio,senior,junior}) => {
    return (
        <td class="text-center">
            <table>
                {/* Socio */}
                <tr>
                    <td className="td-bsvv">
                        {socio}
                    </td>
                </tr>

                {/* Senior */}
                <tr>
                <td className="td-bsvv">
                        {senior}
                    </td>
                </tr>

                {/* Junior */}
                <tr>
                <td className="td-bsvv">
                        {junior}
                    </td>
                </tr>
            </table>


        </td>
    )
}

export default ThreeRows;