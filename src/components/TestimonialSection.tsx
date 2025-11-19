"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alexandra Chen",
    role: "Fintech Founder",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content: "Sushi Software turned our complex vision into simple code.",
  },
  {
    name: "Marcus Webb",
    role: "Product Designer",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content: "Elegant solutions that just work. Design meets engineering.",
  },
  {
    name: "Sarah Mitchell",
    role: "CTO, Healthcare",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content: "They built our compliance engine in weeks, not months.",
  },
  {
    name: "David Park",
    role: "Enterprise Architect",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    content: "Systems thinking at its finest. Clean, scalable, elegant.",
  },
  {
    name: "Rachel Torres",
    role: "Platform Engineer",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    content: "Sushi Software makes complex infrastructure feel simple.",
  },
  {
    name: "James Liu",
    role: "Technical Lead",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    content: "Beautiful code architecture. As elegant as their name.",
  },
  {
    name: "Nina Rodriguez",
    role: "Operations Director",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-7.webp",
    content: "They transformed our workflows into automated systems.",
  },
  {
    name: "Thomas Anderson",
    role: "Innovation Officer",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-8.webp",
    content: "Design and systems thinking perfected. Simply brilliant.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-32  w-full">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center gap-6">
          <Badge variant="outline">Client Stories</Badge>
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
            Why teams choose Sushi Software
          </h2>
          <p className="text-muted-foreground lg:text-lg">
            Elegant solutions. Systems thinking. Simple execution.
          </p>
        </div>
        <div className="relative mt-14 w-full after:absolute after:inset-x-0 after:-bottom-2 after:h-96 after:bg-linear-to-t after:from-background">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
          >
            <Masonry gutter="20px" columnsCount={3}>
              {testimonials.map((testimonial, idx) => {
                return (
                  <Card
                    key={idx}
                    className={cn(
                      "p-5 shadow-md rounded-2xl w-full",
                      idx > 3 && idx <= 5 && "hidden md:block",
                      idx > 5 && "hidden lg:block"
                    )}
                  >
                    <div className="flex gap-4 leading-5">
                      <Avatar className="size-9 rounded-full ring-1 ring-input">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 leading-7 text-foreground/70">
                      <q>{testimonial.content}</q>
                    </div>
                  </Card>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};

export { TestimonialSection };