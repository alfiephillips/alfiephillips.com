import { useEffect } from "react";
import Router from "next/router";
import { useBeforeUnload } from "react-use";

const useLeavePageConfirm = (
    isConfirm = true,
    message = "Changes might have not been saved. Are you sure you want to leave this page?"
) => {
    useBeforeUnload(isConfirm, message);

    useEffect(() => {
        const handler = () => {
            if (isConfirm && !window.confirm(message)) {
                throw "Route Canceled";
            }
        };

        Router.events.on("routeChangeStart", handler);

        return () => {
            Router.events.off("routeChangeStart", handler);
        };
    }, [isConfirm, message]);
};

export default useLeavePageConfirm;
