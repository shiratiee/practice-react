import React from 'react';



export default class Portfolio extends React.Component {
    constructor () {
        super();
        this.state = {
            gallery:
            [{
                name: 'Portfolio',
                img: 'http://via.placeholder.com/350x150'
              }, {
                name: 'Landing Page',
                img: 'http://via.placeholder.com/350x150'
              }, {
                name: 'Web Game',
                img: 'http://via.placeholder.com/350x150'
              }, {
                name: 'Another Game',
                img: 'http://via.placeholder.com/350x150'
              }]


        }
    }
    render () {
        return (
            <div>
            {this.state.gallery.map((data,index) =>
                <div key={index}>
                    <div>{data.name}</div>
                    <img src={data.img}/>
                </div>
            )}
            </div>
        )
    }
   
}
