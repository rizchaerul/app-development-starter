import { FC, Fragment } from "react";
import { Modal, Spinner } from "react-bootstrap";

export const Loading: FC<{
    loading?: boolean;
}> = (props) => {
    return (
        <Fragment>
            <Modal
                size="sm"
                show={props.loading}
                centered
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body className="text-center user-select-none">
                    <Spinner size="sm" /> Loading
                </Modal.Body>
            </Modal>
        </Fragment>
    );
};
