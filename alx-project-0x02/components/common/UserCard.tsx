import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-sm text-gray-500">ID: {id}</p>
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Contact</h3>
          <p className="text-gray-600">{email}</p>
          <p className="text-gray-600">{phone}</p>
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800"
          >
            {website}
          </a>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500">Address</h3>
          <p className="text-gray-600">
            {address.street}, {address.suite}
          </p>
          <p className="text-gray-600">
            {address.city}, {address.zipcode}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500">Company</h3>
          <p className="text-gray-600 font-medium">{company.name}</p>
          <p className="text-gray-600 italic">{company.catchPhrase}</p>
          <p className="text-gray-600">{company.bs}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
