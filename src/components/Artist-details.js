import React from 'react';

const ArtistDetails = ({pollitoypeluche}) => (
  <div className = "artist-detail col-md-8">
    <div className = "details">
      <div>
        {pollitoypeluche.name}
      </div>
      <div>
        {pollitoypeluche.bio}}
      </div>
      <div>
        <img src={pollitoypeluche.url} alt={pollitoypeluche.name}/>
      </div>
    </div>
  </div>
);

export default ArtistDetails;