import React from  "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App(){
  return (
    <div>
      <div>
        <DisplayTable></DisplayTable>
      </div>
       <DisplayTime />
       <section className="movieContent">
    <MovieComponnet />
    <MovieComponnet />
    <MovieComponnet />
    <MovieComponnet />
    <MovieComponnet />
    <MovieComponnet />
    <MovieComponnet />
    <MovieComponnet />
   </section>
    </div>
   
  );
}
const MovieComponnet = () =>{
  return (
    <article className="each-movie">
      <ImageComponnet />
      <Title />
    </article>
  )
}
const ImageComponnet = () =>{
  return <img src="https://occ-0-3215-3662.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ2eMKWAaao1p09Tn-TZBNvd4F4RffteGFG2SIEwYnPeeN1jOLX_8lgKHEK1P6goUY0d3H8qhAEC0n-ur0Uum8I2Mvtm-34qAqnw7TShAN0F-7MAZX3-bg1_lWQWXWs56Am6rLy0P6dN36UDKmQK6GfP7Oyi8rJMmbKDlhB6KQP2EXVlRNmmj5d4nIS1jOemqq5pihGFzmvhbqn98xmgt0fXmuqwVPUWLXoJLgvRRUn6fIRjn2peK31u1345gp14ifLr7olB9PqD4YqgOxs3v03BsZm-igp2TWmH0hTHqPcgO2o8nf8UYkF1zVHt67YdtsaP1yvLmyGM0tNTxDV2KdjnZZN1O8NsZ38gtb9w4b7thLWuIaXjdVpcH1zeB7MKCIvFyi_IvSwO-93-78UOfMiFPN6nY4DrbAi7lG_mH5dzytrWkgu8J_TKfCd0wUUodf9E5EX7ilk7PCu4DHyb7yVF3SPK37fScGymzGmrUurm7u3Trx29ZkYgOELA182FXto.jpg?r=3e4" alt="this is nextflixImage" />
}

const Title = () =>{
  const styles = {
    heading:{
      color:"green",
      fontSize:"30px"
    }
  }
  return <h3>this is netflix imagae</h3>
}

const DisplayTime = () =>{
  
  return <h1 className="time">this is time {new Date().toLocaleTimeString()}</h1>
}
const DisplayTable = () =>{
  return ( 
    <div className="container">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default App;
