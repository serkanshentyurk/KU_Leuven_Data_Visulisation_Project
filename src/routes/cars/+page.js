export const load = ({ fetch }) => {
    const fetchGPS = async () => {
        const res = await fetch("https://vda-lab.github.io/assets/vast2021_gps_coordinates.json")
        const data = await res.json()
        data.forEach((d,i) => {d.lat = (-600*(d.lat - 36.04802108)/(36.08961232 - 36.04802108)) + 600, d.long = (600*(d.long - 24.82586806)/(24.90836090428572 - 24.82586806))})
        return data
    }

    const fetchUniqueIDS = async () => {
        const res = await fetch("https://vda-lab.github.io/assets/vast2021_gps_coordinates.json")
        const data = await res.json()
        let carids = [];
        data.forEach((d) => {carids.push(d.car_id)})
        let uniqueItems = Array.from(new Set(carids))
        return uniqueItems
    }

    const fetchPointOfInterest = async () => {
        const res = await fetch("https://vda-lab.github.io/assets/vast2021_businesses.json")
        const data = await res.json()
        data.forEach((d,i) => {d.lat = (-600*(d.lat - 36.04802108)/(36.08961232 - 36.04802108)) + 600, d.long = (600*(d.long - 24.82586806)/(24.90836090428572 - 24.82586806))})
        return data
    }

    return {
        GPS: fetchGPS(),
        point_interest: fetchPointOfInterest(),
        unique_car_id: fetchUniqueIDS()
    }
}



