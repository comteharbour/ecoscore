import backendLazyInit from "src/backendAccess/backendLazyInit";

export default ({ app, router, store }) => {
  backendLazyInit();
};
