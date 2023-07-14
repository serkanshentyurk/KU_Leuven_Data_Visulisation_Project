export const load = ({ fetch, params}) => {
    const fetchGPS = async () => {
        const res = await fetch("https://vda-lab.github.io/assets/vast2021_gps_coordinates.json")
        const data = await res.json()
        data.forEach((d,i) => {d.lat = (-300*(d.lat - 36.04802108)/(36.08961232 - 36.04802108)) + 300, d.long = (300*(d.long - 24.82586806)/(24.90836090428572 - 24.82586806))})
        let data_for_slug = data.filter((data) => {return data.car_id == parseInt(params.slug)})
        return data_for_slug
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
        data.forEach((d,i) => {d.lat = (-300*(d.lat - 36.04802108)/(36.08961232 - 36.04802108)) + 300, d.long = (300*(d.long - 24.82586806)/(24.90836090428572 - 24.82586806))})
        return data
    }

    const fetchCarStops = async () => {
        const res = await fetch("https://vda-lab.github.io/assets/vast2021_carstops.json")
        const data = await res.json()
        let data_for_slug = data.filter((data) => {return data.car == parseInt(params.slug)})
        data_for_slug.forEach((d,i) => {d.hor_start = (d.start.day -6) * 20, d.ver_start = 300*d.start.time/86400 + 60, d.ver_end = (300*d.end.time/86400) + 60})
        return data_for_slug
    } 

    return {
        GPS: fetchGPS(),
        point_interest: fetchPointOfInterest(),
        unique_car_id: fetchUniqueIDS(),
        car_stops: fetchCarStops()
    }
}

