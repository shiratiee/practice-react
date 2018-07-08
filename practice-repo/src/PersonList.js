import React from 'react';

export default class PersonList extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      doctors :[]
    };
  }

  // componentDidMount() {
  //   fetch("https://api.betterdoctor.com/2016-03-01/doctors/3d999de30565c8f57b47184370750d3c?user_key=6ffaf2f592ca4029cf614bb4bf313be5",
  //   {
  //     method: 'get',
  //     headers: {
  //         'Accept': 'application/json, text/plain, */*',
  //         'Content-Type': 'application/json'
  //     },
  //     mode: 'no-cors',
  // })
  //     .then(res => res.json())
  //     .then(
  //       (result) => { 
  //         console.log(result)
  //         this.setState({
  //           doctors: result.data
  //         });
  //       });
  //       }

  
render() {
  return (
    <div>
        <div>
              {this.state.doctors.map((doc, i) => (
                <div key={doc.id}>
                  <div>
                    <h1>{`${i + 1}. ${doc.data.specialities.uid}`}</h1>
                  </div>
                </div>
              ))}
            </div>
          
        </div>
      );
    }
  }
