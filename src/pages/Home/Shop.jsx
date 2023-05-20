import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ShopCard from "./ShopCard";

const Shop = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("avengers");
  useEffect(() => {
    fetch(`http://localhost:5000/allToys/${category}`)
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((err) => console.log(err));
  }, [category]);
  return (
    <>
      <div className="container py-5">
        <div className="text-center">
          <h2>We Love Trends</h2>
          <p>Featured Products</p>
        </div>
        <Tabs>
          <TabList>
            <Tab onClick={() => setCategory("avengers")}>Avengers</Tab>
            <Tab onClick={() => setCategory("transformers")}>Transformers</Tab>
            <Tab onClick={() => setCategory("starwars")}>Star wars</Tab>
          </TabList>

          <TabPanel>
            <div className="conatiner">
              <div className="row py-5 g-4">
                {toys.map((toy) => (
                  <ShopCard key={toy._id} toy={toy} />
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="conatiner">
              <div className="row py-5 g-4">
                {toys.map((toy) => (
                  <ShopCard key={toy._id} toy={toy} />
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="conatiner">
              <div className="row py-5 g-4">
                {toys.map((toy) => (
                  <ShopCard key={toy._id} toy={toy} />
                ))}
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Shop;