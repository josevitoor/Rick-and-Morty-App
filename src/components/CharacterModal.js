import React from 'react';

export default function CharacterModal(props) {

    return (
        <>
            <br />
            <img src={props.modalContent.image} style={{ height: '475px', width: '475px' }} alt={props.modalContent.name} />
            <br /><br />
            <strong style={{ color: 'white' }}>{props.modalContent.name}</strong><br /><br />
            <p style={{ color: 'white' }}><strong>Species: </strong>{props.modalContent.species}</p>
            <p style={{ color: 'white' }}><strong>Gender: </strong>{props.modalContent.gender}</p>
            <p style={{ color: 'white' }}><strong>Status: </strong>{props.modalContent.status}</p>
            <p style={{ color: 'white' }}><strong>Location: </strong>{props.modalContent.location.name}</p>
        </>
    )
}