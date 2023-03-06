import { Fragment } from "react";
import { createAuthorizeLayout } from "src/components/layouts/AuthorizedLayout";
import { NextPageWithLayout } from "src/types/NextPageWithLayout";

const Page: NextPageWithLayout = () => {
    return (
        <Fragment>
            This page can only be accessed by an authorized user.
        </Fragment>
    );
};

Page.getLayout = createAuthorizeLayout();

export default Page;
