export default class StationService {
    static get baseUrl() {
        return baseUrl;
    }

    async getAllStations() {
        const res = await fetch(`${baseUrl}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        const data = await res.json();
        return data;
    }

    async getSingleStation(stationId) {
        const res = await fetch(`${baseUrl}/${stationId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        return await data;
    }
    async createStation(name, municipality, province) {
        const res = await fetch(baseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            name: name,
            municipality: municipality,
            province: province,
          }),
        });
        const data = await res.json();
       return data;
    }
    
    async updateSingleStation(id, name, mun, prov) {
 
         const res = await fetch(baseUrl, {
           method: "PUT",
           headers: {
             "Content-Type": "application/json",
             Authorization: `Bearer ${localStorage.getItem("token")}`,
           },
           body: JSON.stringify({
             stationId: id,
             name: name,
             municipality: mun,
             province: prov,
           }),
         });
         const data = await res.json();
         return data;
    }

    async deleteSingleStation(stationId) {
        const res = await fetch(baseUrl, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            stationId: stationId,
          }),
        });
        const data = await res.json();
        return data;
        
    }
}

export const baseUrl = "http://localhost:4000/api/station";