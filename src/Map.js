import React, { useEffect, useRef } from 'react';
import H from '@here/maps-api-for-javascript';

export default function Map(){

   const getMap = ( props ) => {
    const mapRef = useRef(null);
    const map = useRef(null);
    const platform = useRef(null)
    const { apikey } = props;
   }
 
    return(
        <>
        <button onClick={getMap}>map</button>
        </>
    )
}
