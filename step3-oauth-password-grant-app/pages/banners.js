import React, { useEffect, useState } from "react";
import axios from "axios";

const BannerListPage = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    // 1
    // const fetchBanners = async () => {
    // const resp =
    // }
    // fetchBanners()

    // // 2

    // ;(async() => {

    // })();

    // 3
    const accessToken = localStorage.getItem("access_token");
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    axios
      .get(
        "https://admin.glob-dev.kong.yk8s.me/admin/api/showroom/v1/banners",
        {
          headers,
        }
      )
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
