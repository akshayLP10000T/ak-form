import { PricingPlan, pricingPlan } from "@/lib/pricingPlan";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const PricingPage = () => {
  return (
    <div>

      <h2 className="text-center mb-1 text-3xl font-bold">Plan and Pricing</h2>
      <h3 className="text-center text-2xl text-gray-600 mb-5">Receive unlimited credits and create as many form as you want</h3>
    <div className="grid grid-cols-3 gap-6 mx-6 pb-5">
      {pricingPlan.map((data: PricingPlan, key: number) => (
        <Card
        className={`${data.level === "Enterprise" && "bg-zinc-900 text-white"} w-full shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between cursor-pointer`}
        key={key}
        >
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-3xl font-extrabold w-fit">
              {data.level}
            </CardTitle>
            <p>
              {data.level === "Pro" && (
                <Badge className="cursor-pointer">Popular</Badge>
              )}
            </p>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-5xl font-bold">{data.price}</p>
            <ul className="mt-5">
                {
                  data.services.map((service: string, key: number)=>(
                    <li key={key}>{service}</li>
                  ))
                }
            </ul>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" className={`${data.level === "Enterprise" && "text-zinc-900"} w-full`}>Get Started With {data.level}</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
      </div>
  );
};

export default PricingPage;
