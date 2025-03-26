import { initialise } from "conductor/dist/conductor/runner/util/";
import { RustEvaluator } from "./RustEvaluator";

const {runnerPlugin, conduit} = initialise(RustEvaluator);
