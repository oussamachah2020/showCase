import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTs, exchange & earn crypto.Join 25+ million people using ProNerf MerketPlace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNerf NFT Marketplace. Smooth constant colors of a fluent UI design"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployement"
        description="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into peoples's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTS while the second one shows the details of a specific NFT"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText} font-bold`}>Made with love by {" "} <span className="bold">Oussama Chahidi</span></p>
      </div>
    </>
  );
};

export default App;
