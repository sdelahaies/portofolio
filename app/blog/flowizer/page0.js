// @flow strict

import { personalData } from "@/utils/data/personal-data";
// import BlogCard from "../components/homepage/blog/blog-card";
// import BlogCard from "../components/homepage/blog/blog-card-2";
import { blogData } from '@/utils/data/blog-data';


async function page() {
    return (
        <div className="py-8">
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
                        Research & Projects
                    </span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
    
      </div> */}
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#4CAF50" }}>Introducing pydagflow: A Python Workflow Framework</h1>
      <p>
        <strong>pydagflow</strong> is a powerful Python package designed for creating,
        managing, and running workflows represented as directed acyclic graphs (DAGs).
        Built on the foundations of the <code>pypubsub</code> library for pub/sub
        messaging and <code>networkx</code> for graph visualization, pydagflow
        provides a robust, flexible, and developer-friendly tool for orchestrating
        complex processes.
      </p>

      <h2 style={{ color: "#4CAF50" }}>Key Features</h2>
      <ul>
        <li>
          <strong>Node-based Design:</strong> Each node represents a function that
          processes data. Nodes communicate with each other using a pub/sub system,
          ensuring modularity and scalability.
        </li>
        <li>
          <strong>Data-Driven Workflow:</strong> Input and output data are
          dictionaries, allowing a flexible structure for passing information between
          nodes.
        </li>
        <li>
          <strong>Custom Functions:</strong> Developers can extend functionality by
          adding custom node types, enabling a highly customizable workflow system.
        </li>
        <li>
          <strong>Graphical Support:</strong> Visualize workflows using
          <code>networkx</code>, making it easier to understand and debug processes.
        </li>
        <li>
          <strong>FastAPI Integration:</strong> The package integrates seamlessly with
          FastAPI, powering advanced use cases like carbon analysis in protocarbon.
        </li>
      </ul>

      <h2 style={{ color: "#4CAF50" }}>How It Works</h2>
      <p>
        At its core, <strong>pydagflow</strong> revolves around two main components:
        nodes and workflows.
      </p>
      <h3 style={{ color: "#4CAF50" }}>Nodes</h3>
      <p>
        A node is a listener in the pub/sub system. Each node has a unique name and
        a predefined type corresponding to the function it executes. When a message
        is published to a node's topic, it checks if all its upstream dependencies
        are completed. If so, it executes its function, updates its status, and
        propagates its output to downstream nodes.
      </p>
      <pre style={{ background: "#1a1443", padding: "10px", borderRadius: "5px" }}>
        {`input = {
  'PaddleOCR': {'text': ...}
}

output = {
  'siren': ..., 
  'siret': ...
}`}
      </pre>
      <p>
        The output of a node becomes part of the input for its downstream nodes,
        ensuring a seamless flow of data throughout the workflow.
      </p>

      <h3 style={{ color: "#4CAF50" }}>Workflows</h3>
      <p>
        A workflow is a collection of interconnected nodes managed as a DAG. It
        begins with initializing a data transfer object (DTO), typically created
        from a YAML configuration file. As the workflow progresses, the DTO is
        hydrated with the output data from each node.
      </p>

      <h2 style={{ color: "#4CAF50" }}>Extending pydagflow</h2>
      <p>
        Users can extend pydagflow by creating custom functions. To do this:
      </p>
      <ol>
        <li>Create a Python file in a designated folder (e.g., <code>DEVPATH</code>).</li>
        <li>
          Define a function with the same name as the file. The function should take
          a dictionary as input and return a dictionary as output.
        </li>
        <li>
          Set the environment variable <code>PYDAGFLOW_DEVPATH</code> to the folder
          path containing your custom functions.
        </li>
      </ol>
      <pre style={{ background: "#1a1443", padding: "10px", borderRadius: "5px" }}>
        {`export PYDAGFLOW_DEVPATH=/path/to/DEVPATH`}
      </pre>

      <h2 style={{ color: "#4CAF50" }}>Why Choose pydagflow?</h2>
      <p>
        <strong>pydagflow</strong> is ideal for developers looking to quickly prototype
        and run workflows in a Python environment. While it is not intended for
        production use, its simplicity, flexibility, and integration capabilities
        make it an invaluable tool for development and testing purposes.
      </p>

      <h2 style={{ color: "#4CAF50" }}>Conclusion</h2>
      <p>
        With its intuitive design and powerful features, <strong>pydagflow</strong>
        bridges the gap between simplicity and functionality. Whether you're
        building complex workflows or experimenting with new ideas, pydagflow has
        you covered.
      </p>
      <p>
        Ready to explore? Check out the documentation and start creating workflows
        today!
      </p>
    </div>
        </div>

  );
};

export default page;