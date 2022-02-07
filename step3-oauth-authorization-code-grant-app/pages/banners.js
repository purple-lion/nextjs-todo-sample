import React, { useEffect, useState } from "react";
import axios from "axios";

const BannerListPage = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
    axios
      .get(`${API_ENDPOINT}/showroom/v1/banners`)
      .then((resp) => setBanners(resp.data));
  }, []);

  return (
    <div>
      {banners.map((banner) => (
        <pre>{JSON.stringify(banner, null, 2)}</pre>
      ))}
    </div>
  );
};

export default BannerListPage;
