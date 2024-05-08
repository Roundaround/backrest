// @generated by protoc-gen-connect-es v1.3.0 with parameter "target=ts"
// @generated from file v1/hub.proto (package v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodKind } from "@bufbuild/protobuf";
import { GetInstancesResponse } from "./hub_pb.js";

/**
 * @generated from service v1.Hub
 */
export const Hub = {
  typeName: "v1.Hub",
  methods: {
    /**
     * GetInstances returns a list of all instances
     *
     * @generated from rpc v1.Hub.GetInstances
     */
    getInstances: {
      name: "GetInstances",
      I: Empty,
      O: GetInstancesResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

