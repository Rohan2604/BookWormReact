import React from 'react';
import { useState, useEffect } from "react";
export function GenreMaster(props) {
    const [GenreMaster, setGenreMaster] = useState([]);
    useEffect(() => {
        fetch("https://localhost:7108/api/GenreMasters")
            .then(res => res.json())
            .then((result) => { setGenreMaster(result); }
            );
    }, []);
    return (
        <div>
          <h2>GnereMaster</h2>
          <table>
            <thead>
              <tr>
                <th>GenreId</th>
                <th>GenreDescription</th>
                <th>LanguageId</th>
               
              
              </tr>
            </thead>
            <tbody>
              {GenreMaster.map(gen => (
                <tr key={gen.genreId}>
                     <td>{gen.genreId}</td>
                    <td>{gen.genreDescription}</td>
                    <td>{gen.languageId}</td>
                   
                </tr>
              ))}
            </tbody>
          </table>
     </div>
      );
    }

    export default GenreMaster;
