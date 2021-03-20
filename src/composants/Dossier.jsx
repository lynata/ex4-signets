import './Dossier.scss'; 
import { IconButton } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import imgDefaut from '../images/couverture.webp';

export default function Dossier({id, nom, couleur, datemodif, couverture}) {

  // lorsque je chenge le com de anchorEl a ancrageEle, le menu ne s'affiche pas a la bonne place
  const [anchorEl, setAncrageEle] = React.useState(null);

  const gererCli = (event) => {
    setAncrageEle(event.currentTarget);
  };

  const gererFermer = () => {
    setAncrageEle(null);
  };

  return (
    <article className="Dossier" style={{backgroundColor: couleur}}>
      <div className="couverture">
        <IconButton className="deplacer" aria-label="déplacer" disableRipple={true}>
          <SortIcon />
        </IconButton>
        <img src={
          // si il ny a pas de lien, si le champs est vide
          couverture == "" ?
          // on affiche limage pas defaut
          imgDefaut
          // sinon on affiche l'img que la personne a choisi
          :
          couverture
          } alt={nom}/>
      </div>
      <div className="info">
        <h2>{nom}</h2>
        <p>Modifié : {formaterDate(datemodif)}</p>
      </div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={gererCli} className="modifier" aria-label="modifier" size="small">
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={gererFermer}
      >
        <MenuItem onClick={gererFermer}>Modifier</MenuItem>
        <MenuItem onClick={gererFermer}>Supprimer</MenuItem>
      </Menu>
    </article>
  );
}

/**
 * Formate les objets date de Firestore et retourne une chaîne de caractères
 * @param {Object} d Objet date retourné par Firestore
 * @returns String date formatée en français
 */
function formaterDate(d) {
  const dateJs = d ? new Date(d.seconds*1000) : new Date();
  const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  return `${dateJs.getDate()} ${mois[dateJs.getMonth()]} ${dateJs.getFullYear()}`;
}