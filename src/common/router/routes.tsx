import React from "react";
import SuspenseLazy from "common/components/SuspenseLazy";
import { Navigate, RouteObject } from "react-router-dom";

const PhotoBooth = SuspenseLazy(
  () =>
    import(/* webpackChunkName:"photoBooth" */ "modules/photoBooth/PhotoBooth")
);
const ToMesh = SuspenseLazy(
  () => import(/* webpackChunkName:"toMesh" */ "modules/toMesh/ToMesh")
);
const ToAvatar = SuspenseLazy(
  () => import(/* webpackChunkName:"toAvatar" */ "modules/toAvatar/ToAvatar")
);
const Square = SuspenseLazy(
  () => import(/* webpackChunkName:"square" */ "modules/square/Square")
);
const NotFound = SuspenseLazy(
  () => import(/* webpackChunkName:"notFound" */ "common/components/NotFound")
);

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="photobooth" />,
  },
  {
    path: "photobooth",
    element: PhotoBooth,
    // children: [
    //   {
    //     path: "one",
    //     element: PhotoBoothStep1,
    //   },
    //   {
    //     path: "two",
    //     element: PhotoBoothStep2,
    //   },
    // ],
  },
  {
    path: "toMesh",
    element: ToMesh,
  },
  {
    path: "toAvatar",
    element: ToAvatar,
  },
  {
    path: "square",
    element: Square,
  },
  {
    path: "*",
    element: NotFound,
  },
];

export default routes;
