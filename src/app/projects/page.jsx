"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/components/data";
import { ExternalLink } from "lucide-react";

export default function projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="flex flex-1 py-24 px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium mb-12 text-center">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="bg-secondary/30 rounded-lg overflow-hidden shadow-lg group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-white px-4 py-2 rounded-md font-medium flex items-center gap-2 hover:bg-accent/80 transition-colors"
                  >
                    View Live <ExternalLink size={16} />
                  </Link>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-secondary/20"></div>                <Image
                  src={project.image}
                  alt={`${project.title} - Portfolio project showing ${project.description.slice(0, 50)}...`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyDjHFN2wNqRm1c7aaV1Bme3n1aY"
                  className={`object-cover transition-all duration-500 ${
                    hoveredProject === project.id ? "scale-110" : "scale-100"
                  }`}
                  style={{
                    filter: hoveredProject === project.id ? 'brightness(1.1)' : 'brightness(1)',
                  }}
                />
              </div>
              <div className="p-6">
                {" "}
                <h3 className="font-serif text-xl mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-3 h-24 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://github.com/Bridgetamana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:no-underline border-b border-accent font-medium px-4 py-2 flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
          >
            View All Projects <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
