import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './records.css';
import { RecordsResponse } from './types';
import { formatDate } from './helpers';
import Pagination from './Pagination/pagination';
import { Link } from 'react-router-dom';

const BASE_URL = 'http://localhost:8080';
// const BASE_URL_PROD = 'https://sds1-henrique-estudos.herokuapp.com';

const Records = () => {

    // react hooks useState
    // variáveis para serem utilizadas no contexto
    const [ recordsResponse, setRecordsResponse] = useState<RecordsResponse>();
    const [ activePage, setActivePage] = useState(0);

    // react hooks useEffect
    // código que ira rodar assim que o componente for inicializado.
    useEffect(() => {
        axios.get(`${BASE_URL}/records?page=${activePage}&linesPerPage=12`)
        .then(response => {
            setRecordsResponse(response.data);
        });
    }, [activePage]);

    const handlePageChange = (index: number) => {
        setActivePage(index);
    }

    return (
        <div className="page-container">
            <div className="filters-container records-actions">
                <Link to="/charts">
                    <button className="action-filters">
                        VER GRÁFICOS
                    </button>
                </Link>
            </div>
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
                    {/* interrogação é o optional channing - tratamento de undefined */}
                    {recordsResponse?.content.map(record => (
                        <tr key={record.id}>
                            <td>{formatDate(record.moment)}</td>
                            <td>{record.name}</td>
                            <td>{record.age}</td>
                            <td className="text-secondary">{record.gamePlatform}</td>
                            <td>{record.genreName}</td>
                            <td className="text-primary">{record.gameTitle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination 
                activePage={activePage}
                goToPage={handlePageChange}
                totalPages={recordsResponse?.totalPages}/>
        </div>
    )
};

export default Records;