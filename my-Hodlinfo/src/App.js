
import './App.css';
import Header from "./Header"
import Body1 from "./Body1"
import Table from "./Table"
import "./utilities.css"

function App() {
  return (
    <div className="app">
      <Header />
      <Body1 />
      <div className="pt_img">
        <img src="https://hodlinfo.com//static/media/cryptonews.54869ee3.png" />
      </div>

      <Table />


      <div className="pt_img">
        <img src="https://hodlinfo.com//static/media/BannerFTXNews.d0cd974b.png" />
      </div>

      <footer className="foot" >
        <div className="foot_sub_1"><p>Copyright © 2019</p><p>HodlInfo.com </p> <p>Developed By <span className="utility_1">QuadBTech</span></p></div>
        <div>Support</div>
      </footer>

    </div>
  );
}

export default App;
