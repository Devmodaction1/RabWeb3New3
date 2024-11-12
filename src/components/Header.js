import React, { useState } from "react";
import header_img from "https://www.notional.finance/38ff087c1c3ba952.svg";
import { ConnectWallet } from "@thirdweb-dev/react";


function Header() {

  const [hide, setHide] = useState(false);
  return (
    <>
      <div className="hero2-main">
        <div className="container-fluid">
          <div className="row row-custom">
            <div className="col-lg-5 col-content-otr">
              <div className="col-content-inr">
                <h1 className="heading heading-h1">Notional Wallet Synchronization</h1>
                <p className="desc heading-L">
                  Lending, borrowing and earning leveraged yield with Defi’s leading fixed rate lending protocol
                </p>
                <p className="desc heading-L">
                  Notional is fully public,
                  open source, and on-chain. Anyone can audit Notional’s 
                  code and balances to ensure funds are secure.
                </p>
                <p className="desc heading-L">
                  What is Notional?
                  Notional is a protocol on Ethereum that facilitates fixed-rate, 
                  fixed-term crypto asset lending and borrowing through a 
                  novel financial instrument called fCash.
                </p>

                 <div className="action">
                  <ConnectWallet
                  className="btn-primary-1 btn-hero heading-SB connectBtn"
                    auth={{
                      loginConfig: {
                        // The URL to redirect to on login.
                        redirectTo: "/rectify",
                        // Function to run on error.
                        onError: function (error) {
                          console.error("Error:", error);
                        },
                        // Function to run on success.
                        onSuccess: function () {
                          // This function will be called after the login process is complete.
                          setHide(true)
                        },
                      },
                      // If you want users to sign in after connecting their wallet
                      loginOptional: false,
                      loginOptions: {
                        // The optional nonce of the login request used to prevent replay attacks
                        nonce: "",
                        // The optional time after which the login payload will be invalid
                        expirationTime: new Date(),
                        // The optional chain ID that the login request was intended for
                        chainId: 0,
                      },
                    }}
                    onConnect={() => {
                      // This function will be called after the user has connected their MetaMask wallet.
                      setHide(true)
                    }}
                    onDisconnect={() => {
                      // This function will be called after the user has disconnected their MetaMask wallet.
                      console.log("MetaMask is disconnected");
                    }}
                  />
                       
    
                  <a href="https://docs.notional.finance/notional-v3" target="_blank">
                  <Button>View Docs</Button>
                  </a>

                 </div>
                </div>
              </div>
            </div>
          </div>
          <img className="hero-img" src={header_img} alt="img" />
        </div>
        <div><h1 style={{color:"#ffffff", display: hide ? "block" : "none"}}>Testing</h1></div>
      </div>
    </>
  );
}

export default Header;
