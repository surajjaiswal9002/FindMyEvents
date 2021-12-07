import axios from "axios";

export const getFeaturedEvents = async () =>{
    const res = await axios.get("http://localhost:9010/events");
    return res.data;
};

export const addEvent = async (details) =>{
    const res = await axios.post("http://localhost:9010/events",details);
    console.log(res.data);
};
export const getAllEvents = async () =>{
    const res = await axios.get("http://localhost:9010/events");
    return res.data;
};

export const deleteEvent = async (id) =>{
    const res = await axios.delete(`http://localhost:9010/events/${id}`)
    console.log(res.data);
};
export const updateEvent = async (details) =>{
    const res = await axios.put(`http://localhost:9010/all/${details.id}`,details);
    console.log(res.data);
};

export const searchByid = async (id) =>{
    const res = await axios.get(`http://localhost:9010/events/${id}`)
    return res.data;
}