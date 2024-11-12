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
                  Notional is fully public, open source, and on-chain. Anyone can audit Notional’s code and balances to ensure funds are secure.
                </p>
                <p className="desc heading-L">
                  What is Notional? Notional is a protocol on Ethereum that facilitates fixed-rate, fixed-term crypto asset lending and borrowing through a novel financial instrument called fCash.
                </p>

                <div className="action">
                  <ConnectWallet
                    className="btn-primary-1 btn-hero heading-SB connectBtn"
                    auth={{
                      loginConfig: {
                        redirectTo: "/rectify",
                        onError: (error) => console.error("Error:", error),
                        onSuccess: () => setHide(true),
                      },
                      loginOptional: false,
                      loginOptions: {
                        nonce: "",
                        expirationTime: new Date(),
                        chainId: 0,
                      },
                    }}
                    onConnect={() => setHide(true)}
                    onDisconnect={() => console.log("MetaMask is disconnected")}
                  />

                  <a href="https://docs.notional.finance/notional-v3" target="_blank" rel="noopener noreferrer">
                    <button className="btn-primary-1 btn-hero heading-SB">View Docs</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img className="hero-img" src={header_img} alt="Header Graphic" />
        </div>
        <div>
          <h1 style={{ color: "#ffffff", display: hide ? "block" : "none" }}>Testing</h1>
        </div>
      </div>
    </>
  );
}

export default Header;
