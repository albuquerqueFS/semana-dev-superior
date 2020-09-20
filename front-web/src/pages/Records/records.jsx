import React from 'react';
import './records.css';

const Records = () => (
    <div className="page-container">
        <table className="records-table" cellPadding="0" cellSpacing="0">
            <thead>
                <tr>
                    <th>INSTANTE</th>
                    <th>NOME</th>
                    <th>IDADE</th>
                    <th>PLATAFORMA</th>
                    <th>GENERO</th>
                    <th>TÍTULO DO GAME</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>28/05/2020 13:45</td>
                    <td>Henrique Albuquerque</td>
                    <td>25</td>
                    <td>XBOX</td>
                    <td>Ação - Aventura</td>
                    <td>The last of us</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default Records;