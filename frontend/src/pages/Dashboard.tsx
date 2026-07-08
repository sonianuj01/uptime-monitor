import { useMemo, useState } from "react";

import Navbar from "../components/dashboard/Navbar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCards from "../components/dashboard/StatsCards";

import Loader from "../components/common/Loader";
import EmptyState from "../components/common/EmptyState";

import MonitorGrid from "../components/monitor/MonitorGrid";
import AddMonitorModal from "../components/monitor/AddMonitorModal";
import SearchBar from "../components/monitor/SearchBar";

import useMonitors from "../hooks/useMonitors";

const Dashboard = () => {

    const {
        monitors,
        loading,
        error,
        fetchMonitors,
        deleteMonitor,
    } = useMonitors();

    const [search, setSearch] = useState("");

    const [open, setOpen] = useState(false);

    const filtered = useMemo(() => {

        return monitors.filter(

            monitor =>

                monitor.url
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    )

        );

    }, [monitors, search]);

    const online =
        monitors.filter(
            m => m.latestStatus === "UP"
        ).length;

    const offline =
        monitors.length - online;

    const average =
        monitors.length === 0

        ? 0

        : Math.round(

            monitors.reduce(

                (sum, m) =>
                    sum +
                    m.latestResponseTime,

                0

            ) / monitors.length

        );

    return (

        <div className="min-h-screen bg-slate-100">

            <Navbar

                total={monitors.length}

                onAdd={() => setOpen(true)}

            />

            <main className="max-w-7xl mx-auto px-8 py-12">

                <DashboardHeader/>

                <StatsCards

                    total={monitors.length}

                    online={online}

                    offline={offline}

                    average={average}

                />

                <SearchBar

                    value={search}

                    onChange={setSearch}

                />

                <div className="mt-10">

                    {

                        loading

                        ? <Loader/>

                        : error

                            ? (

                                <p className="text-red-600">

                                    {error}

                                </p>

                            )

                            : filtered.length === 0

                                ? <EmptyState/>

                                : (

                                    <MonitorGrid

                                        monitors={filtered}

                                        onDelete={deleteMonitor}

                                    />

                                )

                    }

                </div>

            </main>

            <AddMonitorModal

                open={open}

                onClose={() =>
                    setOpen(false)
                }

                refresh={() => {

                    fetchMonitors();

                    setOpen(false);

                }}

            />

        </div>

    );

};

export default Dashboard;