// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';


// class Card extends React.Component {
//   render() {
//     return (
//       <div className="col-lg-6 col-sm-12 p-2">
//         <div className="card">
//           <div className="card-body row">
//             {/* menampilkan Gambar / cover */}
//             <div className="col-5">
//               <img src={this.props.cover} className="img" height="200" alt=""/>
//             </div>

//             {/* menampilkan deskripsi */}
//             <div className="col-7">
//               <h5 className="text-info">{this.props.judul}</h5>
//               <h6 className="text-dark">Penulis: {this.props.penulis}</h6>
//               <h6 className="text-dark">Penerbit: {this.props.penerbit}</h6>
//               <h6 className="text-danger">Harga: Rp {this.props.harga}</h6>

//               {/* button untuk mengedit */}
//               <button
//                 className="btn btn-sm btn-primary m-1"onClick={this.props.onEdit}>Edit</button>

//               {/* button untuk menghapus */}
//               <button className="btn btn-sm btn-danger m-1" onClick={this.props.onDrop}>Hapus</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Card;

import React from "react";
import '../Components/css/card.css'

class Card extends React.Component {
  render() {
    return (
      <div className="col-lg-6 col-sm-12 p-2">
        <div className="card">
          <div className="card-body row">
            <div className="col-5">
              <img src={this.props.cover} className="img" height="200" alt=""/>
            </div>
            <div className="col-7">
              <div className="card-info"> {/* div baru dengan kelas CSS card-info */}
                <h5 className="text-info">{this.props.judul}</h5>
                <h6 className="text-dark">Penulis: {this.props.penulis}</h6>
                <h6 className="text-dark">Penerbit: {this.props.penerbit}</h6>
                <h6 className="text-danger">Harga: Rp {this.props.harga}</h6>
                <button className="btn btn-sm btn-primary m-1" onClick={this.props.onEdit}>Edit</button>
                <button className="btn btn-sm btn-danger m-1" onClick={this.props.onDrop}>Hapus</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;



