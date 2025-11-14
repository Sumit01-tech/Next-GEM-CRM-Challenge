import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeads } from "../features/leads/leadsSlice";
import LeadForm from "../components/LeadForm/LeadForm";

const Leads = () => {
    const dispatch = useDispatch();
    const { items, loading } = useSelector((state) => state.leads);

    useEffect(() => {
        dispatch(fetchLeads());
    }, [dispatch]);

    return (
        <div>
            <h2>Leads</h2>
            <LeadForm onSubmit={(data) => console.log("New Lead:", data)} />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {items.map((lead) => (
                        <li key={lead.id}>{lead.name} — {lead.email}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Leads;
