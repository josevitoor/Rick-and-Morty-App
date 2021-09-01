import React from 'react';

export default function EpisodeModal(props) {
    return (
        <>
            <br />
            <img src={props.modalContent.complement?.img} style={{ height: '100%', width: '100%' }} alt={props.modalContent.complement?.descricao} />
            <br /><br />
            <strong style={{ color: 'white' }}>{props.modalContent.ep.episode}</strong><br />
            <p style={{ color: 'white' }}>{props.modalContent.ep.name}</p>
            <p style={{ color: 'white' }}><strong>Air date: </strong>{props.modalContent.ep.air_date}</p>
            <p style={{ color: 'white' }}><strong>Description: </strong>{props.modalContent.complement?.descricao}</p>
        </>
    )
}