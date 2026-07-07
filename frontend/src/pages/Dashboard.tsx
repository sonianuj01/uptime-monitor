import Header from "../components/Header";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";
import MonitorForm from "../components/MonitorForm";
import MonitorList from "../components/MonitorList";
import useMonitors from "../hooks/useMonitors";

const Dashboard = () => {
    const {
        monitors,
        loading,
        error,
        fetchMonitors,
        deleteMonitor,
    } = useMonitors();

    return (
        <div className="min-h-screen bg-slate-100">

            <Header total={monitors.length} />

            <main className="max-w-7xl mx-auto px-6 py-10">

                <MonitorForm refresh={fetchMonitors} />

                <section className="mt-10">

                    {loading && <Loader />}

                    {!loading && error && (

                        <div className="bg-red-100 border border-red-300 rounded-xl p-4 text-red-700">

                            {error}

                        </div>

                    )}

                    {!loading && !error && monitors.length === 0 && (

                        <EmptyState />

                    )}

                    {!loading && monitors.length > 0 && (

                        <MonitorList
                            monitors={monitors}
                            onDelete={deleteMonitor}
                        />

                    )}

                </section>

            </main>

        </div>
    );
};

export default Dashboard;