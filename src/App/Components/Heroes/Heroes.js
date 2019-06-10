import React, {component} from 'react'
import heroService from '../../services/heroService'

export class Heroes extends Component{
    state={
        heroes= []
    }

    componentDidMount(){
        this.setState({
            heroes=heroeService.getHeroes()
        });
    }
    render(){
        const heroes=this.state.heroes;
        return(
            <React.Fragment>
                <h1>Heroes <Small>Marvel y DC</Small></h1>
                <hr></hr>
                <div className="card-columns">
                    {/*Tarjeta de los heroes*/}

                    {heroes.map(heroe =>{
                        return(
                            <div className="card animated fadeIn fast">
                            <img src={heroe.img} alt={heroe.nombre}
                            className="card-img-top img-fluid" />
                            <div className="card-body">
			    <h4 className="card-title">{heroes.nombre}</h4>
			    <p className="card-text">{heroe.bio}</p>
			    <p className="card-text">
				
			    </p>
                        );
                    })}
                </div>
            </React.Fragment>
        )
    }
}