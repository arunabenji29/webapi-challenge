- [ ] Mention two parts of Express that you learned about this week.

    Express provides routing and Middleware support.

- [ ] Describe Middleware?

    Middleware is an array of functions that get executed in the order they are introduced into the server code.

- [ ] Describe a Resource?

    When designing a RESTful Web API, follow the principles below:

    everything is a resource.
    each resource is accessible via a unique URI.
    resources can have multiple representations.
    communication is done over a stateless protocol (HTTP).
    management of resources is done via HTTP methods

- [ ] What can the API return to help clients know if a request was successful?

    API can return a status code from [200-299] if a request is successful.

- [ ] How can we partition our application into sub-applications?

    We can create separate files to have subapplications and integrate them using 'module.exports=${fileName}' in the subfile and use them using 'require(file-path)' in the current file