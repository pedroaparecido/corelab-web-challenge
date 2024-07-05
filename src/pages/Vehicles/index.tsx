import { useEffect, useState } from "react";
import { getVehicles } from "../../lib/api";
import { Button, Card, Search, Navbar } from "../../components";
import styles from "./Vehicles.module.scss";
import { IVehicle } from "../../types/Vehicle";
import GranCard from "../../components/GranCard";

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchVehicles = async () => {
      const payload = await getVehicles();
      setVehicles(payload);
    };

    fetchVehicles();
  }, []);

  console.log({ vehicles });

  return (
    <>
    <Navbar placeholder="Search" value={search} onChange={() => {}} />
      <div className={styles.Vehicles}>
        <Card />
        <main className={styles.main}>
          <GranCard />
          <GranCard />
          <GranCard />
        </main>
      </div>
    </>
  );
};

export default VehiclesPage;
