export interface PricingPlan {
    level: string;
    price: string;
    services: string[]
}

export const pricingPlan : PricingPlan[] = [
    {
        level: "Free",
        price: "$0/month",
        services: [
            "3 Free Credits",
            "Basic Supports",
            "Community access",
            "Basic Features"
        ],
    },
    {
        level: "Pro",
        price: "$10/month",
        services: [
            "Unlimited Credits",
            "Basic Supports",
            "Community access",
            "Better Features",
        ],
    },
    {
        level: "Enterprise",
        price: "$0/month",
        services: [
            "Unlimited Credits",
            "Basic Supports",
            "Community access",
            "Monthly Updates",
            "All Features",
        ],
    },
]