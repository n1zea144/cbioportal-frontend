import {getGenomeNexusApiUrl} from "./urls";
import GenomeNexusAPIInternal from "./generated/GenomeNexusAPIInternal";

const client = new GenomeNexusAPIInternal("https://genomenexus.ingress.cbioportal.review");

export default client;
