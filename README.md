# Building a Cloud Application Integrated with Amazon OpenSearch Service using its Storage Tiers.

### Objective:

To build a cloud application which is ingesting structured and unstructured data into Amazon OpenSearch Service which is using different tiers of storage ( Hot, Cold) based on frequency of accessibility of  data, latency requirement etc to get real-time insight of data through search, analyze and visualize logs.

### Problem Statement: 

- To build a cloud application by ingesting and visualising real-time data which would help the stakeholders to have a better understanding of the products offered by them and also manage their data efficiently by using storage tiers.

- The real time data which will initially be in the hot storage will have a higher replica count. A Reduction in the number of replicas upon moving to cold storage is done in order to save storage space by 60%.

- Alerts are set-up based on the incoming traffic to the dashboard for an instance, for a certain interval to check if there are no customer orders coming in.
