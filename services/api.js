import axios from "axios";

export const api = axios.create({
    baseURL: "https://takxiyhjgqgausaeutaa.supabase.co/rest/v1",
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRha3hpeWhqZ3FnYXVzYWV1dGFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3Mzc1NTgsImV4cCI6MjA0NTMxMzU1OH0.TwepsV0r9eDNVTR4Ez0SCUDzxQtpsfHgEq0G1i1s2Vs",

        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRha3hpeWhqZ3FnYXVzYWV1dGFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3Mzc1NTgsImV4cCI6MjA0NTMxMzU1OH0.TwepsV0r9eDNVTR4Ez0SCUDzxQtpsfHgEq0G1i1s2Vs"
    }


}
)