# Use the official Python image from the Docker Hub
FROM python:3.10-slim

# Set the working directory in the container
WORKDIR /docs

# Install MkDocs and any plugins you need
RUN pip install mkdocs mkdocs-material

# Copy the local MkDocs project into the container
COPY docs /docs

# Expose the port MkDocs will run on
EXPOSE 8000

# Command to run MkDocs server
CMD ["mkdocs", "serve", "--dev-addr=0.0.0.0:8000"]
