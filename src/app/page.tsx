import { graphqlSDK } from "@/lib/graphqlSdk";

async function Page() {
  const { customer: customers } = await graphqlSDK.listCustomers();
  return (
    <div className="space-y-4">
      <h1 aria-label="heading" className="text-4xl font-bold">
        Customer lists
      </h1>
      <div>
        {customers.map((customer) => (
          <div key={customer.id} className="flex flex-row space-x-2 my-2">
            <p>{customer.firstName}</p>
            <p>{customer.lastName}:</p>
            <p className="text-yellow-800">{customer.ipAddress}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
