# Creating a usable subgraph on The Graph
An easy but unclear process using the Subgraph Studio

## Starting from The Graph > Subgraph Studio
[My Subgraphs](https://thegraph.com/studio)
1. Create a new subgraph
2. While editing the graph details, you'll see a shortcut kind of getting started on the right hand of the page
3. Install the global CLI using npm or yarn as instructed
` npm install -g @graphprotocol/graph-cli` or `yarn global add @graphprotocol/graph-cli`
4. Make your graph directory
5. Initialize your graph using the CLI `graph init --studio GRAPH_NAME_HERE`
6. Authenticate in CLI (just has to be done before you go to deploy): as this command has details about your specific account, you'll want to copy and past it from the subgraph studio
7. Go into your graph's directory (as created in 4)
8. HERE'S WHERE WE DIFFER: ACTUALLY LOOK AT WHAT THE GRAPH IS DOING BEFORE YOU BOTHER BUILDING AND CODEGEN'ING
  - View [schema.graphql](./schema.graphql). Here you'll find the ExampleEntity defined. As per the name, it's a good example of what you can define in a graph. That said, it's probably not what you're looking for. Create your own object(s) with the fields you care about, as I did with the Developer entity.
  - View [subgraph.yaml](./subgraph.yaml). By default the new subgraph is tracking Approval Events (this is shown in subgraph.yaml: dataSources -> kind -> mapping -> eventHandlers)
    - Choose an event that is supported by your contract and is of value to your subgraph (I did this by looking up the Contract address on Etherscan and viewing the Events tab to see what events were being called - for Devs for Revolution, claim is the main method called which triggers a Transfer Event in the logs).
    - Note the handler method that you have selected, you'll need to ensure that it exists in [mapping.ts](./src/mapping.ts).
  - View [mapping.ts](./src/mapping.ts). This file has the handler methods defined that come with the subgraph CLI initialization, and is where you'll edit or create your handler that you've chosen in [subgraph.yaml](./subgraph.yaml).
    - The CLI stubs out `handleApprovalForAll`, `handleOwnershipTransferred`, `handleTransfer`, and puts in example code for `handleApproval`. The example code has some very useful code in place (commented out) which show off what you have defined in your ABI, as callable in typescript.
    - Update your code to do what you need it to in populating your Graph Entities.
9. You can now proceed with the steps on your Subgraph page - `graph codegen && graph build`
10. Deploy your graph `graph deploy --studio YOUR_SUBGRAPH_NAME`. Note that you have to do this in order to be able to run test queries in the Subgraph Studio, but you can do this even on mainnet without incurring costs.