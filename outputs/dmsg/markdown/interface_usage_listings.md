# DMSG Repository Interface Usage Listings

## Analysis Summary
- Total compilation units analyzed: 64
- Total interface usages: 931
- Unique interfaces used: 61

---
## .
**Path**: /Users/tayyab/development/sythtask/repos/dmsg
**Interface Usages**: 0

*No interface usage found*

---
## cmd/conf
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/conf
**Interface Usages**: 0

*No interface usage found*

---
## cmd/conf/commands
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/conf/commands
**Interface Usages**: 0

*No interface usage found*

---
## cmd/dial
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dial
**Interface Usages**: 0

*No interface usage found*

---
## cmd/dial/commands
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dial/commands
**Interface Usages**: 1

### dmsg.Client
**Variable (1)**:
- dial.go:128 - variable dmsgClients

---

## cmd/dmsg
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsg
**Interface Usages**: 0

*No interface usage found*

---
## cmd/dmsg-discovery
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsg-discovery
**Interface Usages**: 0

*No interface usage found*

---
## cmd/dmsg-discovery/commands
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsg-discovery/commands
**Interface Usages**: 21

### context.Context
**Field (1)**:
- dmsg-discovery.go:191 - field ctx

**Parameter (3)**:
- dmsg-discovery.go:237 - function updateServers
- dmsg-discovery.go:191 - function prepareDB
- dmsg-discovery.go:206 - function getServers

### disc.APIClient
**Field (1)**:
- dmsg-discovery.go:237 - field dClient

**Parameter (1)**:
- dmsg-discovery.go:237 - function updateServers

### dmsg.Client
**Field (1)**:
- dmsg-discovery.go:237 - field dmsgC

**Parameter (1)**:
- dmsg-discovery.go:237 - function updateServers

### error
**Field (1)**:
- dmsg-discovery.go:271 - struct field

**Return (2)**:
- dmsg-discovery.go:271 - function listenAndServe
- dmsg-discovery.go:285 - function fetchOfficialDmsgServers

**Variable (1)**:
- dmsg-discovery.go:96 - variable err

### http.Handler
**Field (1)**:
- dmsg-discovery.go:271 - field handler

**Parameter (1)**:
- dmsg-discovery.go:271 - function listenAndServe

### logging.Logger
**Field (1)**:
- dmsg-discovery.go:191 - field log

**Parameter (1)**:
- dmsg-discovery.go:191 - function prepareDB

### logrus.FieldLogger
**Field (1)**:
- dmsg-discovery.go:237 - field log

**Parameter (2)**:
- dmsg-discovery.go:206 - function getServers
- dmsg-discovery.go:237 - function updateServers

### store.Storer
**Field (1)**:
- dmsg-discovery.go:191 - struct field

**Return (1)**:
- dmsg-discovery.go:191 - function prepareDB

---

## cmd/dmsg-server
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsg-server
**Interface Usages**: 0

*No interface usage found*

---
## cmd/dmsg-server/commands
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsg-server/commands
**Interface Usages**: 0

*No interface usage found*

---
## cmd/dmsg-server/commands/config
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsg-server/commands/config
**Interface Usages**: 0

*No interface usage found*

---
## cmd/dmsg-server/commands/start
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsg-server/commands/start
**Interface Usages**: 4

### error
**Field (1)**:
- root.go:43 - struct field

**Return (1)**:
- root.go:126 - function configNotFound

### io.ReadCloser
**Field (1)**:
- root.go:126 - struct field

**Return (1)**:
- root.go:126 - function configNotFound

---

## cmd/dmsg-socks5
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsg-socks5
**Interface Usages**: 0

*No interface usage found*

---
## cmd/dmsg-socks5/commands
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsg-socks5/commands
**Interface Usages**: 3

### error
**Variable (1)**:
- dmsg-socks5.go:38 - variable err

### http.Client
**Variable (1)**:
- dmsg-socks5.go:35 - variable httpClient

### logging.Logger
**Variable (1)**:
- dmsg-socks5.go:36 - variable dlog

---

## cmd/dmsg/commands
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsg/commands
**Interface Usages**: 0

*No interface usage found*

---
## cmd/dmsgcurl
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsgcurl
**Interface Usages**: 0

*No interface usage found*

---
## cmd/dmsgcurl/commands
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsgcurl/commands
**Interface Usages**: 24

### context.Context
**Field (1)**:
- dmsgcurl.go:355 - field ctx

**Parameter (2)**:
- dmsgcurl.go:161 - function handleRequest
- dmsgcurl.go:355 - function cancellableCopy

### dmsg.Client
**Variable (1)**:
- dmsgcurl.go:173 - variable dmsgClients

### error
**Field (3)**:
- dmsgcurl.go:372 - struct field
- dmsgcurl.go:313 - field err
- errors.go:40 - field Error

**Parameter (2)**:
- dmsgcurl.go:301 - function isFatalHTTPErr
- dmsgcurl.go:313 - function closeAndCleanFile

**Return (6)**:
- dmsgcurl.go:330 - function parseOutputFile
- dmsgcurl.go:355 - function cancellableCopy
- dmsgcurl.go:353 - method readerFunc.Read
- dmsgcurl.go:372 - method *progressWriter.Write
- dmsgcurl.go:306 - function prepareOutputFile
- dmsgcurl.go:289 - function buildHTTPRequest

**Variable (1)**:
- dmsgcurl.go:48 - variable err

### http.Client
**Field (1)**:
- dmsgcurl.go:161 - field httpClient

**Parameter (1)**:
- dmsgcurl.go:161 - function handleRequest

**Variable (1)**:
- dmsgcurl.go:170 - variable httpC

### io.ReadCloser
**Field (1)**:
- dmsgcurl.go:355 - field body

**Parameter (1)**:
- dmsgcurl.go:355 - function cancellableCopy

### io.Writer
**Field (1)**:
- dmsgcurl.go:355 - field w

**Parameter (1)**:
- dmsgcurl.go:355 - function cancellableCopy

### progressWriter
**Field (1)**:
- dmsgcurl.go:372 - field pw

---

## cmd/dmsghttp
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsghttp
**Interface Usages**: 0

*No interface usage found*

---
## cmd/dmsghttp/commands
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsghttp/commands
**Interface Usages**: 6

### GinHandler
**Field (1)**:
- dmsghttp.go:219 - field h

### dmsg.Client
**Variable (1)**:
- dmsghttp.go:127 - variable dmsgC

### error
**Variable (1)**:
- dmsghttp.go:40 - variable err

### gin.Context
**Field (1)**:
- dmsghttp.go:181 - field c

### http.ResponseWriter
**Field (1)**:
- dmsghttp.go:219 - field w

**Parameter (1)**:
- dmsghttp.go:219 - method *GinHandler.ServeHTTP

---

## cmd/dmsgip
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsgip
**Interface Usages**: 0

*No interface usage found*

---
## cmd/dmsgip/commands
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsgip/commands
**Interface Usages**: 4

### error
**Field (1)**:
- dmsgip.go:65 - struct field

**Variable (1)**:
- dmsgip.go:35 - variable err

### http.Client
**Variable (1)**:
- dmsgip.go:31 - variable httpClient

### proxy.Dialer
**Variable (1)**:
- dmsgip.go:103 - variable dialer

---

## cmd/dmsgpty-cli
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsgpty-cli
**Interface Usages**: 0

*No interface usage found*

---
## cmd/dmsgpty-cli/commands
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsgpty-cli/commands
**Interface Usages**: 2

### error
**Field (1)**:
- root.go:105 - struct field

**Return (1)**:
- whitelist.go:85 - function pksFromArgs

---

## cmd/dmsgpty-host
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsgpty-host
**Interface Usages**: 0

*No interface usage found*

---
## cmd/dmsgpty-host/commands
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsgpty-host/commands
**Interface Usages**: 5

### error
**Field (1)**:
- confgen.go:26 - struct field

**Return (3)**:
- root.go:162 - function configFromJSON
- root.go:239 - function fillConfigFromENV
- root.go:299 - function getConfig

**Variable (1)**:
- root.go:302 - variable err

---

## cmd/dmsgpty-ui
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsgpty-ui
**Interface Usages**: 0

*No interface usage found*

---
## cmd/dmsgpty-ui/commands
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsgpty-ui/commands
**Interface Usages**: 0

*No interface usage found*

---
## cmd/dmsgweb
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsgweb
**Interface Usages**: 0

*No interface usage found*

---
## cmd/dmsgweb/commands
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/cmd/dmsgweb/commands
**Interface Usages**: 26

### context.Context
**Field (2)**:
- dmsgweb.go:35 - field ctx
- dmsgweb.go:35 - struct field

**Parameter (3)**:
- dmsgwebsrv.go:164 - function proxyHTTPConnections
- dmsgweb.go:35 - method *customResolver.Resolve
- dmsgwebsrv.go:204 - function proxyTCPConnections

**Return (1)**:
- dmsgweb.go:35 - method *customResolver.Resolve

### dmsg.Client
**Field (1)**:
- dmsgweb.go:340 - field dmsgC

**Variable (1)**:
- root.go:29 - variable dmsgC

### error
**Field (1)**:
- dmsgweb.go:245 - struct field

**Return (1)**:
- dmsgweb.go:35 - method *customResolver.Resolve

**Variable (1)**:
- root.go:50 - variable err

### gin.Context
**Field (1)**:
- dmsgwebsrv.go:173 - field c

### ginHandler
**Field (1)**:
- root.go:331 - field h

### http.Client
**Variable (2)**:
- root.go:52 - variable httpClient
- root.go:28 - variable httpC

### http.ResponseWriter
**Field (1)**:
- root.go:331 - field w

**Parameter (1)**:
- root.go:331 - method *ginHandler.ServeHTTP

### logging.Logger
**Variable (2)**:
- root.go:37 - variable dmsgWebLog
- root.go:27 - variable dlog

### net.Conn
**Field (3)**:
- dmsgweb.go:245 - struct field
- dmsgwebsrv.go:255 - field dmsgConn
- dmsgweb.go:340 - field conn

### net.Listener
**Field (1)**:
- dmsgwebsrv.go:204 - field listener

**Parameter (2)**:
- dmsgwebsrv.go:204 - function proxyTCPConnections
- dmsgwebsrv.go:164 - function proxyHTTPConnections

### proxy.Dialer
**Variable (1)**:
- root.go:53 - variable dialer

---

## examples/basics
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/examples/basics
**Interface Usages**: 0

*No interface usage found*

---
## examples/dmsgcurl/dmsg-example-http-server
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/examples/dmsgcurl/dmsg-example-http-server
**Interface Usages**: 4

### error
**Field (1)**:
- dmsg-example-http-server.go:34 - field err

**Return (1)**:
- dmsg-example-http-server.go:34 - function parse

### http.ResponseWriter
**Field (1)**:
- dmsg-example-http-server.go:88 - field w

**Parameter (1)**:
- dmsg-example-http-server.go:88 - function fileServerHandler

---

## examples/dmsgcurl/gen-keys
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/examples/dmsgcurl/gen-keys
**Interface Usages**: 0

*No interface usage found*

---
## examples/dmsghttp
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/examples/dmsghttp
**Interface Usages**: 1

### http.ResponseWriter
**Field (1)**:
- dmsghttp.go:90 - field w

---

## examples/dmsghttp-client
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/examples/dmsghttp-client
**Interface Usages**: 0

*No interface usage found*

---
## examples/dmsgtcp
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/examples/dmsgtcp
**Interface Usages**: 4

### logging.Logger
**Field (1)**:
- dmsgtcp.go:115 - field log

**Parameter (1)**:
- dmsgtcp.go:115 - function handleConnection

### net.Conn
**Field (1)**:
- dmsgtcp.go:115 - field conn

**Parameter (1)**:
- dmsgtcp.go:115 - function handleConnection

---

## examples/dmsgweb
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/examples/dmsgweb
**Interface Usages**: 0

*No interface usage found*

---
## examples/dmsgweb/commands
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/examples/dmsgweb/commands
**Interface Usages**: 15

### context.Context
**Field (2)**:
- dmsgweb.go:105 - field ctx
- root.go:37 - struct field

**Parameter (2)**:
- root.go:37 - method *customResolver.Resolve
- root.go:69 - function startDmsg

**Return (1)**:
- root.go:37 - method *customResolver.Resolve

### dmsg.Client
**Field (1)**:
- root.go:69 - field dmsgC

**Return (1)**:
- root.go:69 - function startDmsg

### error
**Field (2)**:
- root.go:37 - struct field
- root.go:69 - field err

**Return (2)**:
- root.go:69 - function startDmsg
- root.go:37 - method *customResolver.Resolve

### gin.Context
**Field (1)**:
- root.go:94 - field c

### http.Client
**Variable (1)**:
- root.go:55 - variable httpC

### logging.Logger
**Variable (1)**:
- root.go:60 - variable dmsgWebLog

### net.Conn
**Field (1)**:
- dmsgweb.go:105 - struct field

---

## examples/gen-keys
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/examples/gen-keys
**Interface Usages**: 0

*No interface usage found*

---
## examples/http
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/examples/http
**Interface Usages**: 1

### http.ResponseWriter
**Field (1)**:
- http.go:14 - field w

---

## examples/proxified
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/examples/proxified
**Interface Usages**: 0

*No interface usage found*

---
## examples/tcp
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/examples/tcp
**Interface Usages**: 2

### net.Conn
**Field (1)**:
- tcp.go:31 - field conn

**Parameter (1)**:
- tcp.go:31 - function handleConnection

---

## examples/tcp-multi-proxy-dmsg
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/examples/tcp-multi-proxy-dmsg
**Interface Usages**: 9

### context.Context
**Field (1)**:
- tcp-multi-proxy-dmsg.go:124 - field ctx

**Parameter (1)**:
- tcp-multi-proxy-dmsg.go:124 - function proxyPort

### dmsg.Client
**Field (1)**:
- tcp-multi-proxy-dmsg.go:124 - field dmsgC

**Parameter (1)**:
- tcp-multi-proxy-dmsg.go:124 - function proxyPort

### logging.Logger
**Field (1)**:
- tcp-multi-proxy-dmsg.go:124 - field log

**Parameter (2)**:
- tcp-multi-proxy-dmsg.go:124 - function proxyPort
- tcp-multi-proxy-dmsg.go:149 - function handleTCPConnection

### net.Conn
**Field (1)**:
- tcp-multi-proxy-dmsg.go:149 - field dmsgConn

**Parameter (1)**:
- tcp-multi-proxy-dmsg.go:149 - function handleTCPConnection

---

## examples/tcp-proxy
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/examples/tcp-proxy
**Interface Usages**: 4

### error
**Field (1)**:
- tcp-proxy.go:78 - field err

**Parameter (1)**:
- tcp-proxy.go:78 - function isClosedConnErr

### net.Conn
**Field (1)**:
- tcp-proxy.go:43 - field conn

**Parameter (1)**:
- tcp-proxy.go:43 - function handleConnection

---

## examples/tcp-proxy-dmsg
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/examples/tcp-proxy-dmsg
**Interface Usages**: 24

### context.Context
**Field (1)**:
- tcp-proxy-dmsg.go:234 - field ctx

**Parameter (1)**:
- tcp-proxy-dmsg.go:234 - function startDmsg

### dmsg.Client
**Field (1)**:
- tcp-proxy-dmsg.go:234 - field dmsgC

**Return (1)**:
- tcp-proxy-dmsg.go:234 - function startDmsg

**Variable (1)**:
- tcp-proxy-dmsg.go:50 - variable dmsgC

### error
**Field (2)**:
- tcp-proxy-dmsg.go:220 - struct field
- tcp-proxy-dmsg.go:226 - field err

**Parameter (1)**:
- tcp-proxy-dmsg.go:226 - function isClosedConnErr

**Return (2)**:
- tcp-proxy-dmsg.go:220 - method *logWriterImpl.Write
- tcp-proxy-dmsg.go:234 - function startDmsg

**Variable (1)**:
- tcp-proxy-dmsg.go:73 - variable err

### http.Client
**Variable (1)**:
- tcp-proxy-dmsg.go:49 - variable httpC

### io.Writer
**Field (1)**:
- tcp-proxy-dmsg.go:207 - struct field

**Return (1)**:
- tcp-proxy-dmsg.go:207 - function logWriter

### logging.Logger
**Field (1)**:
- tcp-proxy-dmsg.go:155 - field log

**Parameter (3)**:
- tcp-proxy-dmsg.go:207 - function logWriter
- tcp-proxy-dmsg.go:167 - function handleTCPConnection
- tcp-proxy-dmsg.go:155 - function proxyTCPConnections

**Variable (1)**:
- tcp-proxy-dmsg.go:59 - variable dmsgWebLog

### net.Conn
**Field (1)**:
- tcp-proxy-dmsg.go:167 - field dmsgConn

**Parameter (1)**:
- tcp-proxy-dmsg.go:167 - function handleTCPConnection

### net.Listener
**Field (2)**:
- tcp-proxy-dmsg.go:136 - field l
- tcp-proxy-dmsg.go:155 - field lis

**Parameter (1)**:
- tcp-proxy-dmsg.go:155 - function proxyTCPConnections

---

## examples/tcp-reverse-proxy-dmsg
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/examples/tcp-reverse-proxy-dmsg
**Interface Usages**: 17

### context.Context
**Field (1)**:
- tcp-reverse-proxy-dmsg.go:227 - field ctx

**Parameter (1)**:
- tcp-reverse-proxy-dmsg.go:227 - function startDmsg

### dmsg.Client
**Field (1)**:
- tcp-reverse-proxy-dmsg.go:227 - field dmsgC

**Return (1)**:
- tcp-reverse-proxy-dmsg.go:227 - function startDmsg

**Variable (1)**:
- tcp-reverse-proxy-dmsg.go:56 - variable dmsgC

### error
**Field (2)**:
- tcp-reverse-proxy-dmsg.go:222 - struct field
- tcp-reverse-proxy-dmsg.go:227 - field err

**Return (2)**:
- tcp-reverse-proxy-dmsg.go:222 - method *logWriterImpl.Write
- tcp-reverse-proxy-dmsg.go:227 - function startDmsg

**Variable (1)**:
- tcp-reverse-proxy-dmsg.go:71 - variable err

### http.Client
**Variable (1)**:
- tcp-reverse-proxy-dmsg.go:55 - variable httpC

### io.Writer
**Field (1)**:
- tcp-reverse-proxy-dmsg.go:209 - struct field

**Return (1)**:
- tcp-reverse-proxy-dmsg.go:209 - function logWriter

### logging.Logger
**Field (1)**:
- tcp-reverse-proxy-dmsg.go:209 - field log

**Parameter (1)**:
- tcp-reverse-proxy-dmsg.go:209 - function logWriter

**Variable (1)**:
- tcp-reverse-proxy-dmsg.go:64 - variable dmsgWebLog

### net.Conn
**Field (1)**:
- tcp-reverse-proxy-dmsg.go:175 - field conn

---

## internal/cli
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/internal/cli
**Interface Usages**: 35

### FallbackRoundTripper
**Field (1)**:
- cli.go:233 - field f

### context.Context
**Field (1)**:
- cli.go:46 - field ctx

**Parameter (5)**:
- cli.go:225 - function NewFallbackRoundTripper
- cli.go:46 - function InitDmsgWithFlags
- cli.go:148 - function StartDmsgDirect
- cli.go:163 - function StartDmsgDirectWithServers
- cli.go:118 - function StartDmsg

### dmsg.Client
**Field (3)**:
- cli.go:163 - field dmsgC
- cli.go:148 - struct field
- cli.go:225 - field clients

**Parameter (1)**:
- cli.go:225 - function NewFallbackRoundTripper

**Return (4)**:
- cli.go:118 - function StartDmsg
- cli.go:46 - function InitDmsgWithFlags
- cli.go:148 - function StartDmsgDirect
- cli.go:163 - function StartDmsgDirectWithServers

**Variable (1)**:
- cli.go:69 - variable dmsgClients

### error
**Field (2)**:
- cli.go:118 - field err
- cli.go:233 - struct field

**Return (5)**:
- cli.go:163 - function StartDmsgDirectWithServers
- cli.go:46 - function InitDmsgWithFlags
- cli.go:233 - method *FallbackRoundTripper.RoundTrip
- cli.go:118 - function StartDmsg
- cli.go:148 - function StartDmsgDirect

**Variable (1)**:
- cli.go:234 - variable lastErr

### http.Client
**Field (1)**:
- cli.go:118 - field httpClient

**Parameter (2)**:
- cli.go:46 - function InitDmsgWithFlags
- cli.go:118 - function StartDmsg

**Variable (1)**:
- cli.go:68 - variable dmsgHTTP

### http.RoundTripper
**Field (1)**:
- cli.go:225 - struct field

**Return (1)**:
- cli.go:225 - function NewFallbackRoundTripper

### logging.Logger
**Field (1)**:
- cli.go:163 - field dlog

**Parameter (4)**:
- cli.go:118 - function StartDmsg
- cli.go:148 - function StartDmsgDirect
- cli.go:46 - function InitDmsgWithFlags
- cli.go:163 - function StartDmsgDirectWithServers

---

## internal/discmetrics
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/internal/discmetrics
**Interface Usages**: 2

### metricsutil.VictoriaMetricsIntGaugeWrapper
**Field (2)**:
- victoria_metrics.go:10 - field clientsCount
- victoria_metrics.go:11 - field serversCount

---

## internal/dmsg-discovery/api
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/internal/dmsg-discovery/api
**Interface Usages**: 30

### context.Context
**Field (1)**:
- api.go:484 - field ctx

**Parameter (3)**:
- api.go:106 - method *API.RunBackgroundTasks
- api.go:484 - method *API.updateInternalState
- api.go:121 - method *API.AllServers

### error
**Field (3)**:
- error_handler.go:29 - field e
- api.go:455 - struct field
- error_handler_test.go:18 - field err

**Parameter (1)**:
- error_handler.go:29 - method *API.handleError

**Return (2)**:
- api.go:121 - method *API.AllServers
- api.go:455 - function isLoopbackAddr

### http.Handler
**Embedded (1)**:
- api.go:38 - struct API

**Field (1)**:
- api.go:39 - struct field

### http.ResponseWriter
**Field (1)**:
- api.go:132 - field w

**Parameter (3)**:
- api.go:469 - method *API.writeJSON
- api.go:444 - method *API.serviceHealth
- error_handler.go:29 - method *API.handleError

### logrus.FieldLogger
**Field (4)**:
- api.go:484 - field logger
- api.go:101 - struct field
- api.go:53 - field log
- api.go:121 - field _

**Parameter (4)**:
- api.go:484 - method *API.updateInternalState
- api.go:106 - method *API.RunBackgroundTasks
- api.go:53 - function New
- api.go:121 - method *API.AllServers

**Return (1)**:
- api.go:101 - method *API.log

### metricsutil.RequestsInFlightCountMiddleware
**Field (1)**:
- api.go:42 - field reqsInFlightCountMiddleware

### store.Storer
**Field (1)**:
- api.go:41 - field db

**Parameter (1)**:
- api.go:53 - function New

### store2.Storer
**Field (2)**:
- entries_endpoint_test.go:111 - field s
- get_available_servers_test.go:58 - struct field

---

## internal/dmsg-discovery/store
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/internal/dmsg-discovery/store
**Interface Usages**: 53

### MockStore
**Field (1)**:
- testing.go:99 - field ms

### Storer
**Field (1)**:
- testing.go:52 - struct field

**Return (3)**:
- testing.go:52 - function NewMock
- storer.go:77 - function NewStore
- redis.go:26 - function newRedis

### context.Context
**Field (2)**:
- storer.go:45 - field ctx
- testing.go:222 - field _

**Parameter (20)**:
- redis.go:122 - method *redisStore.AvailableServers
- redis.go:108 - method *redisStore.DelEntry
- testing.go:60 - method *MockStore.Entry
- testing.go:83 - method *MockStore.SetEntry
- redis.go:26 - function newRedis
- redis.go:209 - method *redisStore.CountEntries
- testing.go:99 - method *MockStore.DelEntry
- testing.go:222 - method *MockStore.AllVisorEntries
- testing.go:105 - method *MockStore.RemoveOldServerEntries
- storer.go:77 - function NewStore
- redis.go:224 - method *redisStore.RemoveOldServerEntries
- redis.go:171 - method *redisStore.AllServers
- testing.go:116 - method *MockStore.AvailableServers
- redis.go:66 - method *redisStore.SetEntry
- testing.go:138 - method *MockStore.AllServers
- redis.go:237 - method *redisStore.AllEntries
- testing.go:160 - method *MockStore.CountEntries
- redis.go:46 - method *redisStore.Entry
- testing.go:201 - method *MockStore.AllEntries
- redis.go:245 - method *redisStore.AllVisorEntries

### error
**Field (1)**:
- redis.go:122 - struct field

**Return (20)**:
- redis.go:108 - method *redisStore.DelEntry
- testing.go:160 - method *MockStore.CountEntries
- storer.go:77 - function NewStore
- redis.go:209 - method *redisStore.CountEntries
- testing.go:222 - method *MockStore.AllVisorEntries
- testing.go:116 - method *MockStore.AvailableServers
- redis.go:26 - function newRedis
- redis.go:66 - method *redisStore.SetEntry
- testing.go:99 - method *MockStore.DelEntry
- redis.go:122 - method *redisStore.AvailableServers
- testing.go:138 - method *MockStore.AllServers
- redis.go:224 - method *redisStore.RemoveOldServerEntries
- redis.go:245 - method *redisStore.AllVisorEntries
- redis.go:237 - method *redisStore.AllEntries
- redis.go:46 - method *redisStore.Entry
- testing.go:105 - method *MockStore.RemoveOldServerEntries
- testing.go:83 - method *MockStore.SetEntry
- redis.go:171 - method *redisStore.AllServers
- testing.go:60 - method *MockStore.Entry
- testing.go:201 - method *MockStore.AllEntries

### logging.Logger
**Field (1)**:
- redis.go:26 - field log

**Parameter (2)**:
- storer.go:77 - function NewStore
- redis.go:26 - function newRedis

### redis.Client
**Field (1)**:
- redis.go:22 - field client

### redisStore
**Field (1)**:
- redis.go:171 - field r

---

## internal/dmsg-server/api
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/internal/dmsg-server/api
**Interface Usages**: 16

### context.Context
**Field (1)**:
- api.go:56 - field ctx

**Parameter (1)**:
- api.go:56 - method *API.RunBackgroundTasks

### dmsg.Server
**Field (2)**:
- api.go:30 - field dmsgServer
- api.go:79 - field srv

**Parameter (1)**:
- api.go:79 - method *API.SetDmsgServer

### error
**Field (1)**:
- api.go:121 - struct field

**Return (2)**:
- api.go:121 - method *API.Close
- api.go:84 - method *API.ListenAndServe

### http.ResponseWriter
**Field (1)**:
- api.go:135 - field w

**Parameter (2)**:
- api.go:126 - method *API.health
- api.go:135 - method *API.writeJSON

### logging.Logger
**Field (1)**:
- api.go:40 - field log

**Parameter (1)**:
- api.go:40 - function New

### logrus.FieldLogger
**Field (1)**:
- api.go:150 - struct field

**Return (1)**:
- api.go:150 - method *API.log

### net.Listener
**Field (1)**:
- api.go:93 - field l

---

## internal/flags
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/internal/flags
**Interface Usages**: 3

### error
**Field (1)**:
- flags.go:43 - struct field

**Return (1)**:
- flags.go:43 - function InitConfig

**Variable (1)**:
- flags.go:44 - variable err

---

## internal/fsutil
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/internal/fsutil
**Interface Usages**: 2

### error
**Field (1)**:
- fsutil.go:9 - struct field

**Return (1)**:
- fsutil.go:9 - function Exists

---

## internal/servermetrics
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/internal/servermetrics
**Interface Usages**: 9

### metrics.Counter
**Field (4)**:
- victoria_metrics.go:17 - field successfulSessions
- victoria_metrics.go:18 - field failedSessions
- victoria_metrics.go:20 - field successfulStreams
- victoria_metrics.go:21 - field failedStreams

### metricsutil.VictoriaMetricsIntGaugeWrapper
**Field (3)**:
- victoria_metrics.go:15 - field clientsCount
- victoria_metrics.go:16 - field activeSessions
- victoria_metrics.go:19 - field activeStreams

### metricsutil.VictoriaMetricsUintGaugeWrapper
**Field (2)**:
- victoria_metrics.go:13 - field packetsPerMinute
- victoria_metrics.go:14 - field packetsPerSecond

---

## pkg/direct
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/pkg/direct
**Interface Usages**: 30

### context.Context
**Field (2)**:
- client.go:56 - field _
- direct.go:16 - field ctx

**Parameter (8)**:
- client.go:72 - method *directClient.AvailableServers
- client.go:84 - method *directClient.AllServers
- client.go:56 - method *directClient.DelEntry
- client.go:36 - method *directClient.Entry
- client.go:64 - method *directClient.PutEntry
- direct.go:16 - function StartDmsg
- client.go:48 - method *directClient.PostEntry
- client.go:96 - method *directClient.AllEntries

### directClient
**Field (1)**:
- client.go:84 - field c

### disc.APIClient
**Field (2)**:
- client.go:24 - struct field
- direct.go:17 - field dClient

**Parameter (1)**:
- direct.go:16 - function StartDmsg

**Return (1)**:
- client.go:24 - function NewClient

### dmsg.Client
**Field (1)**:
- direct.go:17 - field dmsgDC

**Return (1)**:
- direct.go:16 - function StartDmsg

### error
**Field (2)**:
- client.go:64 - struct field
- direct.go:17 - field err

**Return (8)**:
- client.go:56 - method *directClient.DelEntry
- client.go:84 - method *directClient.AllServers
- direct.go:16 - function StartDmsg
- client.go:36 - method *directClient.Entry
- client.go:64 - method *directClient.PutEntry
- client.go:72 - method *directClient.AvailableServers
- client.go:48 - method *directClient.PostEntry
- client.go:96 - method *directClient.AllEntries

### logging.Logger
**Field (1)**:
- client.go:24 - field log

**Parameter (2)**:
- direct.go:16 - function StartDmsg
- client.go:24 - function NewClient

---

## pkg/disc
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/pkg/disc
**Interface Usages**: 56

### APIClient
**Field (1)**:
- testing.go:24 - struct field

**Return (2)**:
- testing.go:24 - function NewMock
- client.go:41 - function NewHTTP

### Client
**Field (2)**:
- entry.go:156 - field c
- entry.go:116 - field Client

### Server
**Field (2)**:
- entry.go:179 - field s
- entry.go:122 - field Server

### context.Context
**Field (3)**:
- client.go:27 - struct field
- testing.go:134 - field _
- client.go:28 - field ctx

**Parameter (14)**:
- client.go:149 - method *httpClient.DelEntry
- testing.go:80 - method *mockClient.PostEntry
- testing.go:160 - method *mockClient.AllEntries
- testing.go:147 - method *mockClient.AllServers
- testing.go:134 - method *mockClient.AvailableServers
- testing.go:104 - method *mockClient.PutEntry
- client.go:278 - method *httpClient.AllServers
- client.go:236 - method *httpClient.AvailableServers
- testing.go:98 - method *mockClient.DelEntry
- client.go:95 - method *httpClient.PostEntry
- testing.go:69 - method *mockClient.Entry
- client.go:320 - method *httpClient.AllEntries
- client.go:53 - method *httpClient.Entry
- client.go:203 - method *httpClient.PutEntry

### disc.APIClient
**Field (5)**:
- client_mock_test.go:297 - field _
- client_mock_test.go:34 - struct field
- client_mock_test.go:41 - field mockClient
- client_mock_test.go:132 - field apiClient
- client_mock_test.go:200 - field s

### error
**Field (1)**:
- testing.go:98 - struct field

**Return (20)**:
- testing.go:69 - method *mockClient.Entry
- testing.go:147 - method *mockClient.AllServers
- client.go:95 - method *httpClient.PostEntry
- testing.go:160 - method *mockClient.AllEntries
- client.go:236 - method *httpClient.AvailableServers
- client.go:320 - method *httpClient.AllEntries
- client.go:149 - method *httpClient.DelEntry
- client.go:53 - method *httpClient.Entry
- testing.go:80 - method *mockClient.PostEntry
- entry.go:78 - function errFromString
- entry.go:290 - method *Entry.ValidateIteration
- entry.go:251 - method *Entry.Validate
- testing.go:134 - method *mockClient.AvailableServers
- testing.go:98 - method *mockClient.DelEntry
- entry.go:93 - function NewEntryValidationError
- entry.go:233 - method *Entry.Sign
- client.go:278 - method *httpClient.AllServers
- entry.go:210 - method *Entry.VerifySignature
- testing.go:104 - method *mockClient.PutEntry
- client.go:203 - method *httpClient.PutEntry

### http.Client
**Field (1)**:
- client.go:34 - field client

**Parameter (1)**:
- client.go:41 - function NewHTTP

### httpClient
**Field (1)**:
- client.go:236 - field c

### logging.Logger
**Field (1)**:
- client.go:41 - field log

**Parameter (1)**:
- client.go:41 - function NewHTTP

### mockClient
**Field (1)**:
- testing.go:45 - field m

---

## pkg/dmsg
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/pkg/dmsg
**Interface Usages**: 145

### Client
**Field (3)**:
- client.go:602 - field ce
- client.go:133 - struct field
- stream_test.go:60 - field dialer

**Return (1)**:
- client.go:89 - function NewClient

### Listener
**Field (2)**:
- listener.go:37 - field l
- listener.go:26 - struct field

**Return (2)**:
- listener.go:26 - function newListener
- client.go:326 - method *Client.Listen

### Server
**Field (2)**:
- server.go:172 - field s
- server.go:57 - struct field

**Return (1)**:
- server.go:57 - function NewServer

### bytes.Buffer
**Variable (1)**:
- util.go:29 - variable b

### context.Context
**Field (1)**:
- client.go:149 - field ctx

**Parameter (21)**:
- client.go:467 - method *Client.EnsureAndObtainSession
- server.go:172 - method *Server.startUpdateEntryLoop
- client.go:284 - method *Client.discoverServers
- client.go:139 - method *Client.Serve
- entity_common.go:146 - method *EntityCommon.updateServerEntry
- client.go:371 - method *Client.LookupIP
- entity_common.go:326 - function getClientEntry
- util.go:10 - function awaitDone
- client.go:502 - method *Client.dialSession
- entity_common.go:130 - method *EntityCommon.delSession
- client.go:593 - method *Client.AllVisorEntries
- entity_common.go:269 - method *EntityCommon.updateClientEntryLoop
- client.go:484 - method *Client.EnsureSession
- client.go:343 - method *Client.DialStream
- entity_common.go:110 - method *EntityCommon.setSession
- entity_common.go:315 - function getServerEntry
- entity_common.go:298 - method *EntityCommon.delEntry
- entity_common.go:228 - method *EntityCommon.updateClientEntry
- entity_common.go:199 - method *EntityCommon.updateServerEntryLoop
- client.go:584 - method *Client.AllEntries
- client.go:338 - method *Client.Dial

### disc.APIClient
**Field (1)**:
- entity_common.go:40 - field dc

**Parameter (5)**:
- entity_common.go:315 - function getServerEntry
- server.go:57 - function NewServer
- entity_common.go:40 - method *EntityCommon.init
- client.go:89 - function NewClient
- entity_common.go:326 - function getClientEntry

### error
**Field (4)**:
- client.go:584 - field err
- stream.go:258 - struct field
- errors.go:83 - field nxt
- client.go:82 - field errCh

**Parameter (1)**:
- errors.go:114 - method Error.Wrap

**Return (61)**:
- server.go:113 - method *Server.Serve
- session_common.go:123 - method *SessionCommon.writeObject
- client.go:326 - method *Client.Listen
- session_common.go:89 - method *SessionCommon.initServer
- session_common.go:137 - method *SessionCommon.readObject
- client.go:298 - method *Client.Close
- client.go:338 - method *Client.Dial
- session_common.go:173 - method *SessionCommon.Ping
- session_common.go:55 - method *SessionCommon.initClient
- session_common.go:176 - method *SessionCommon.Close
- client.go:343 - method *Client.DialStream
- client.go:371 - method *Client.LookupIP
- client.go:467 - method *Client.EnsureAndObtainSession
- stream.go:30 - function newInitiatingStream
- server_session.go:167 - method *ServerSession.forwardRequest
- stream.go:38 - function newRespondingStream
- server_session.go:156 - function addrToIP
- stream.go:47 - method *Stream.Close
- server_session.go:70 - method *ServerSession.serveStream
- client.go:284 - method *Client.discoverServers
- stream.go:62 - method *Stream.writeRequest
- client.go:484 - method *Client.EnsureSession
- stream.go:90 - method *Stream.writeIPRequest
- server_session.go:36 - method *ServerSession.Close
- stream.go:113 - method *Stream.readRequest
- server_session.go:23 - function makeServerSession
- stream.go:138 - method *Stream.writeResponse
- client.go:502 - method *Client.dialSession
- stream.go:169 - method *Stream.readResponse
- client.go:584 - method *Client.AllEntries
- stream.go:184 - method *Stream.readIPResponse
- client.go:593 - method *Client.AllVisorEntries
- stream.go:248 - method *Stream.Read
- client_session.go:20 - function makeClientSession
- stream.go:253 - method *Stream.Write
- client_session.go:31 - method *ClientSession.DialStream
- stream.go:258 - method *Stream.SetDeadline
- server.go:172 - method *Server.startUpdateEntryLoop
- stream.go:263 - method *Stream.SetReadDeadline
- client_session.go:73 - method *ClientSession.LookupIP
- stream.go:268 - method *Stream.SetWriteDeadline
- client_session.go:117 - method *ClientSession.serve
- client_session.go:143 - method *ClientSession.acceptStream
- server.go:97 - method *Server.Close
- const.go:86 - function InitConfig
- entity_common.go:146 - method *EntityCommon.updateServerEntry
- types.go:60 - method *Addr.Set
- entity_common.go:228 - method *EntityCommon.updateClientEntry
- types.go:145 - method SignedObject.ObtainStreamRequest
- entity_common.go:298 - method *EntityCommon.delEntry
- types.go:156 - method SignedObject.ObtainStreamResponse
- entity_common.go:315 - function getServerEntry
- types.go:178 - method StreamRequest.Verify
- listener.go:92 - method *Listener.Close
- types.go:216 - method StreamResponse.Verify
- entity_common.go:326 - function getClientEntry
- listener.go:73 - method *Listener.AcceptStream
- errors.go:50 - function ErrorFromCode
- listener.go:68 - method *Listener.Accept
- util.go:36 - function decodeGob
- listener.go:40 - method *Listener.introduceStream

**Variable (1)**:
- client.go:302 - variable err

### io.Reader
**Field (1)**:
- session_common.go:137 - field r

**Parameter (1)**:
- session_common.go:137 - method *SessionCommon.readObject

### io.Writer
**Field (1)**:
- session_common.go:123 - field w

**Parameter (1)**:
- session_common.go:123 - method *SessionCommon.writeObject

### logging.MasterLogger
**Field (2)**:
- entity_common.go:34 - field mlog
- entity_common.go:67 - struct field

**Parameter (1)**:
- entity_common.go:71 - method *EntityCommon.SetMasterLogger

**Return (1)**:
- entity_common.go:67 - method *EntityCommon.MasterLogger

### logrus.FieldLogger
**Field (2)**:
- server_session.go:70 - field log
- stream.go:58 - struct field

**Parameter (3)**:
- server_session.go:70 - method *ServerSession.serveStream
- entity_common.go:64 - method *EntityCommon.SetLogger
- entity_common.go:40 - method *EntityCommon.init

**Return (2)**:
- stream.go:58 - method *Stream.Logger
- entity_common.go:60 - method *EntityCommon.Logger

### net.Conn
**Field (4)**:
- session_common.go:89 - field conn
- stream_test.go:64 - field c1
- session_common.go:26 - field netConn
- listener.go:68 - struct field

**Parameter (5)**:
- server_session.go:23 - function makeServerSession
- session_common.go:89 - method *SessionCommon.initServer
- client_session.go:20 - function makeClientSession
- server.go:207 - method *Server.handleSession
- session_common.go:55 - method *SessionCommon.initClient

**Return (3)**:
- session_common.go:37 - method *SessionCommon.GetConn
- listener.go:68 - method *Listener.Accept
- client.go:338 - method *Client.Dial

**Variable (1)**:
- client.go:506 - variable conn

### net.Listener
**Field (2)**:
- stream_test.go:60 - struct field
- server.go:113 - field lis

**Parameter (2)**:
- server.go:193 - method *Server.SetAdvertisedAddr
- server.go:113 - method *Server.Serve

### netutil.Porter
**Field (1)**:
- client_session.go:20 - field porter

**Parameter (4)**:
- listener.go:26 - function newListener
- client_session.go:20 - function makeClientSession
- entity_common.go:92 - method *EntityCommon.allClientSessions
- entity_common.go:87 - method *EntityCommon.clientSession

### noise.ReadWriter
**Field (1)**:
- stream.go:25 - field nsConn

---

## pkg/dmsgctrl
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/pkg/dmsgctrl
**Interface Usages**: 14

### context.Context
**Field (1)**:
- control.go:84 - field ctx

**Parameter (1)**:
- control.go:84 - method *Control.Ping

### error
**Field (2)**:
- control.go:84 - struct field
- control.go:33 - field err

**Parameter (1)**:
- control.go:132 - method *Control.reportErr

**Return (3)**:
- control.go:84 - method *Control.Ping
- control.go:109 - method *Control.Close
- control.go:125 - method *Control.Err

### net.Conn
**Field (2)**:
- control.go:104 - struct field
- control.go:38 - field conn

**Parameter (1)**:
- control.go:38 - function ControlStream

**Return (1)**:
- control.go:104 - method *Control.Conn

### net.Listener
**Field (1)**:
- serve_listener.go:10 - field l

**Parameter (1)**:
- serve_listener.go:10 - function ServeListener

---

## pkg/dmsgcurl
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/pkg/dmsgcurl
**Interface Usages**: 42

### ProgressWriter
**Field (1)**:
- progress_writer.go:17 - field pw

### context.Context
**Field (1)**:
- dmsgcurl.go:220 - field ctx

**Parameter (4)**:
- dmsgcurl.go:73 - method *DmsgCurl.Run
- dmsgcurl.go:196 - method *DmsgCurl.StartDmsg
- dmsgcurl.go:253 - function CancellableCopy
- dmsgcurl.go:220 - function Download

### disc.APIClient
**Field (2)**:
- dmsgcurl_test.go:174 - field dc
- dmsgcurl_test.go:104 - struct field

**Parameter (2)**:
- dmsgcurl_test.go:174 - function newHTTPClient
- dmsgcurl_test.go:136 - function runHTTPSrv

**Return (1)**:
- dmsgcurl_test.go:104 - function startDmsgEnv

### dmsg.Addr
**Embedded (1)**:
- url.go:18 - struct URL

### dmsg.Client
**Field (1)**:
- dmsgcurl.go:196 - field dmsgC

**Return (1)**:
- dmsgcurl.go:196 - method *DmsgCurl.StartDmsg

### error
**Field (2)**:
- dmsgcurl.go:171 - struct field
- dmsgcurl.go:73 - field err

**Return (10)**:
- dmsgcurl.go:220 - function Download
- dmsgcurl.go:140 - function parseKeyPair
- dmsgcurl.go:73 - method *DmsgCurl.Run
- progress_writer.go:17 - method *ProgressWriter.Write
- dmsgcurl.go:249 - method readerFunc.Read
- dmsgcurl.go:154 - function parseURL
- dmsgcurl.go:171 - function parseOutputFile
- dmsgcurl.go:196 - method *DmsgCurl.StartDmsg
- url.go:24 - method *URL.Fill
- dmsgcurl.go:253 - function CancellableCopy

### http.Client
**Field (2)**:
- dmsgcurl_test.go:174 - struct field
- dmsgcurl.go:220 - field httpC

**Parameter (1)**:
- dmsgcurl.go:220 - function Download

**Return (1)**:
- dmsgcurl_test.go:174 - function newHTTPClient

### http.ResponseWriter
**Field (1)**:
- dmsgcurl_test.go:146 - field w

### io.ReadCloser
**Field (1)**:
- dmsgcurl.go:253 - field body

**Parameter (1)**:
- dmsgcurl.go:253 - function CancellableCopy

### io.Writer
**Field (1)**:
- dmsgcurl.go:253 - field w

**Parameter (2)**:
- dmsgcurl.go:220 - function Download
- dmsgcurl.go:253 - function CancellableCopy

### logging.Logger
**Field (1)**:
- dmsgcurl.go:196 - field log

**Parameter (2)**:
- dmsgcurl.go:196 - method *DmsgCurl.StartDmsg
- dmsgcurl.go:73 - method *DmsgCurl.Run

### logrus.FieldLogger
**Field (1)**:
- dmsgcurl.go:220 - field log

**Parameter (1)**:
- dmsgcurl.go:220 - function Download

### url.URL
**Embedded (1)**:
- url.go:18 - struct URL

---

## pkg/dmsghttp
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/pkg/dmsghttp
**Interface Usages**: 43

### HTTPTransport
**Field (2)**:
- http_transport.go:24 - struct field
- http_transport.go:33 - field t

**Return (1)**:
- http_transport.go:24 - function MakeHTTPTransport

### context.Context
**Field (1)**:
- util.go:48 - field ctx

**Parameter (4)**:
- http.go:18 - function ListenAndServe
- util.go:48 - function UpdateServers
- util.go:16 - function GetServers
- http_transport.go:24 - function MakeHTTPTransport

### disc.APIClient
**Field (4)**:
- http.go:18 - field _
- util.go:48 - field dClient
- http_transport_test.go:101 - struct field
- http_transport_test.go:134 - field dc

**Parameter (3)**:
- http.go:18 - function ListenAndServe
- util.go:48 - function UpdateServers
- http_transport_test.go:134 - function newDmsgClient

**Return (1)**:
- http_transport_test.go:101 - function startDmsgEnv

### dmsg.Client
**Field (2)**:
- http_transport.go:24 - field dmsgC
- http_transport_test.go:134 - struct field

**Parameter (3)**:
- http_transport.go:24 - function MakeHTTPTransport
- http.go:18 - function ListenAndServe
- util.go:48 - function UpdateServers

**Return (1)**:
- http_transport_test.go:134 - function newDmsgClient

### error
**Field (4)**:
- http_transport.go:33 - struct field
- http_test.go:31 - field ReqErr
- http_test.go:34 - field RespErr
- http_test.go:63 - field RespCloseErr

**Return (3)**:
- http_transport.go:70 - method *wrappedBody.Close
- http.go:18 - function ListenAndServe
- http_transport.go:33 - method HTTPTransport.RoundTrip

### http.Client
**Field (1)**:
- http_test.go:148 - field httpC

**Parameter (1)**:
- http_test.go:148 - function requestHTTP

### http.Handler
**Field (1)**:
- http.go:18 - field a

**Parameter (1)**:
- http.go:18 - function ListenAndServe

### http.ResponseWriter
**Field (1)**:
- examples_test.go:78 - field w

### io.ReadCloser
**Embedded (1)**:
- http_transport.go:65 - struct wrappedBody

**Field (1)**:
- http_transport.go:66 - struct field

### io.Reader
**Variable (1)**:
- http_test.go:149 - variable reader

### logging.Logger
**Field (1)**:
- http.go:19 - field log

**Parameter (3)**:
- util.go:16 - function GetServers
- http.go:18 - function ListenAndServe
- util.go:48 - function UpdateServers

### net.Listener
**Field (1)**:
- http_test.go:86 - field lis

**Parameter (1)**:
- http_test.go:86 - function startHTTPServer

---

## pkg/dmsgpty
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/pkg/dmsgpty
**Interface Usages**: 156

### PtyClient
**Field (3)**:
- cli.go:112 - field ptyC
- pty_client.go:122 - field sc
- pty_client.go:40 - struct field

**Parameter (5)**:
- host_test.go:237 - function checkPty
- cli.go:112 - method *CLI.servePty
- pty_gateway.go:79 - function NewProxyGateway
- ui_windows.go:11 - method *UI.uiStartSize
- cli_windows.go:16 - function ptyResizeLoop

**Return (2)**:
- pty_client.go:24 - function NewPtyClient
- pty_client.go:40 - function NewProxyClient

### UIDialer
**Field (2)**:
- ui_dialer.go:23 - struct field
- ui.go:44 - field dialer

**Parameter (1)**:
- ui.go:48 - function NewUI

**Return (2)**:
- ui_dialer.go:23 - function NetUIDialer
- ui_dialer.go:18 - function DmsgUIDialer

### WhitelistClient
**Field (3)**:
- whitelist_client.go:35 - field wc
- host_test.go:255 - field wlCli
- whitelist_client.go:17 - struct field

**Parameter (1)**:
- host_test.go:255 - function checkWhitelist

**Return (2)**:
- whitelist_client.go:17 - function NewWhitelistClient
- cli.go:36 - method *CLI.WhitelistClient

### bytes.Buffer
**Variable (1)**:
- ui.go:84 - variable b

### context.Context
**Field (2)**:
- host_mux.go:36 - field ctx
- host.go:214 - field _

**Parameter (8)**:
- cli.go:45 - method *CLI.StartLocalPty
- cli_unix.go:19 - function ptyResizeLoop
- cli.go:66 - method *CLI.StartRemotePty
- host_mux.go:36 - method *hostMux.ServeConn
- host.go:158 - method *Host.serveConn
- host.go:40 - method *Host.ServeCLI
- host.go:87 - method *Host.ListenAndServe
- cli.go:112 - method *CLI.servePty

### dmsg.Client
**Field (2)**:
- host.go:32 - field dmsgC
- host_test.go:217 - field c

**Parameter (4)**:
- host_test.go:217 - function tempWhitelist
- host.go:32 - function NewHost
- ui_dialer.go:18 - function DmsgUIDialer
- host_test.go:279 - function getConfig

### dmsgUIDialer
**Field (1)**:
- ui_dialer.go:32 - field d

### error
**Field (2)**:
- ui_windows.go:11 - struct field
- rpc_util.go:17 - field err

**Parameter (4)**:
- rpc_util.go:17 - function processRPCError
- ui.go:213 - function writeWSError
- ui.go:230 - function writeError
- rpc_util.go:75 - function writeResponse

**Return (67)**:
- whitelist.go:51 - method *configWhitelist.Get
- pty_unix.go:48 - method *Pty.Read
- cli.go:87 - method *CLI.prepareConn
- ui.go:70 - method *UI.writeBanner
- cli_unix.go:43 - function getPtySize
- cli.go:45 - method *CLI.StartLocalPty
- host.go:87 - method *Host.ListenAndServe
- ui_dialer.go:32 - method *dmsgUIDialer.Dial
- pty_client_windows.go:14 - function getSize
- host_mux.go:36 - method *hostMux.ServeConn
- pty_gateway.go:39 - method *LocalPtyGateway.Stop
- pty_gateway.go:44 - method *LocalPtyGateway.Read
- pty_client.go:79 - method *PtyClient.Read
- pty_unix.go:72 - method *Pty.Start
- cli_windows.go:44 - method *CLI.prepareStdin
- cli.go:36 - method *CLI.WhitelistClient
- rpc_util.go:89 - function readResponse
- cli.go:66 - method *CLI.StartRemotePty
- whitelist_gateway.go:39 - method *WhitelistGateway.WhitelistRemove
- pty_gateway.go:64 - method *LocalPtyGateway.SetPtySize
- whitelist_gateway.go:34 - method *WhitelistGateway.WhitelistAdd
- pty_client.go:122 - method *PtyClient.SetPtySize
- ui_html.go:13 - function writeTermHTML
- cli.go:112 - method *CLI.servePty
- pty_gateway.go:52 - method *LocalPtyGateway.Start
- rpc_util.go:75 - function writeResponse
- ui_unix.go:11 - method *UI.uiStartSize
- cli_windows.go:16 - function ptyResizeLoop
- conf.go:38 - function WriteConfig
- pty_client.go:24 - function NewPtyClient
- rpc_util.go:56 - function readRequest
- pty_client.go:97 - method *PtyClient.call
- pty_client.go:40 - function NewProxyClient
- rpc_util.go:39 - function writeRequest
- rpc_util.go:17 - function processRPCError
- pty_gateway.go:57 - method *LocalPtyGateway.Write
- whitelist.go:35 - function NewConfigWhitelist
- pty_windows.go:114 - method *Pty.SetPtySize
- host.go:40 - method *Host.ServeCLI
- pty_gateway.go:69 - method *ProxiedPtyGateway.SetPtySize
- whitelist.go:77 - method *configWhitelist.Add
- pty_windows.go:60 - method *Pty.Write
- whitelist.go:125 - method *configWhitelist.Remove
- whitelist.go:155 - method *configWhitelist.open
- pty_windows.go:34 - method *Pty.Stop
- whitelist.go:194 - function updateFile
- whitelist.go:222 - method *memoryWhitelist.Get
- pty_client.go:56 - method *PtyClient.Close
- whitelist.go:229 - method *memoryWhitelist.All
- ui_dialer.go:45 - method *netUIDialer.Dial
- whitelist.go:239 - method *memoryWhitelist.Add
- whitelist.go:248 - method *memoryWhitelist.Remove
- whitelist.go:65 - method *configWhitelist.All
- pty_client.go:117 - method *PtyClient.StartWithSize
- whitelist_client.go:17 - function NewWhitelistClient
- pty_gateway_windows.go:14 - function NewWinSize
- whitelist_gateway.go:19 - method *WhitelistGateway.Whitelist
- whitelist_client.go:28 - method WhitelistClient.ViewWhitelist
- pty_client.go:87 - method *PtyClient.Write
- pty_gateway.go:102 - method *ProxiedPtyGateway.Write
- whitelist_client.go:35 - method WhitelistClient.WhitelistAdd
- pty_client.go:108 - method *PtyClient.Start
- pty_gateway.go:94 - method *ProxiedPtyGateway.Read
- whitelist_client.go:40 - method WhitelistClient.WhitelistRemove
- pty_gateway.go:89 - method *ProxiedPtyGateway.Stop
- pty_gateway.go:84 - method *ProxiedPtyGateway.Start
- pty_client.go:74 - method *PtyClient.Stop

**Variable (1)**:
- pty_gateway.go:103 - variable err

### http.Header
**Field (1)**:
- ui.go:199 - field h

**Parameter (1)**:
- ui.go:199 - function isWebsocket

### http.ResponseWriter
**Field (1)**:
- ui.go:105 - field w

**Parameter (1)**:
- ui.go:230 - function writeError

### io.ReadWriteCloser
**Field (1)**:
- whitelist_client.go:17 - field conn

**Parameter (3)**:
- pty_client.go:24 - function NewPtyClient
- pty_client.go:40 - function NewProxyClient
- whitelist_client.go:17 - function NewWhitelistClient

### io.ReadWriter
**Field (1)**:
- rpc_util.go:39 - field rw

**Parameter (1)**:
- rpc_util.go:39 - function writeRequest

### io.Reader
**Field (1)**:
- rpc_util.go:89 - field r

**Parameter (2)**:
- rpc_util.go:56 - function readRequest
- rpc_util.go:89 - function readResponse

### io.Writer
**Field (1)**:
- ui.go:70 - field w

**Parameter (3)**:
- ui.go:70 - method *UI.writeBanner
- ui_html.go:13 - function writeTermHTML
- rpc_util.go:75 - function writeResponse

### logrus.FieldLogger
**Field (3)**:
- ui.go:66 - field log
- host.go:190 - struct field
- cli.go:21 - field Log

**Parameter (5)**:
- ui.go:230 - function writeError
- ui.go:213 - function writeWSError
- host.go:176 - method *Host.authorize
- host.go:158 - method *Host.serveConn
- ui.go:66 - method *UI.SetLogger

**Return (2)**:
- ui.go:60 - method *UI.Logger
- host.go:190 - method *Host.log

### net.Conn
**Field (3)**:
- host_mux.go:36 - field conn
- ui_dialer.go:45 - struct field
- ui.go:213 - field wsConn

**Parameter (4)**:
- ui.go:209 - function logWS
- host_mux.go:36 - method *hostMux.ServeConn
- host.go:158 - method *Host.serveConn
- ui.go:213 - function writeWSError

**Return (3)**:
- ui_dialer.go:45 - method *netUIDialer.Dial
- ui_dialer.go:32 - method *dmsgUIDialer.Dial
- cli.go:87 - method *CLI.prepareConn

### net.Listener
**Field (1)**:
- host.go:40 - field lis

**Parameter (1)**:
- host.go:40 - method *Host.ServeCLI

### netUIDialer
**Field (1)**:
- ui_dialer.go:49 - field d

### rpc.Client
**Field (2)**:
- whitelist_client.go:13 - field c
- pty_client.go:18 - field rpcC

### rpc.Server
**Field (1)**:
- host_mux.go:23 - field rpcS

---

## pkg/dmsgserver
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/pkg/dmsgserver
**Interface Usages**: 4

### error
**Field (1)**:
- config.go:60 - field err

**Return (1)**:
- config.go:60 - method Config.Flush

### logging.Logger
**Field (1)**:
- config.go:60 - field log

**Parameter (1)**:
- config.go:60 - method Config.Flush

---

## pkg/dmsgtest
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/pkg/dmsgtest
**Interface Usages**: 35

### context.Context
**Field (2)**:
- env.go:145 - field ctx
- env.go:246 - struct field

**Parameter (2)**:
- env.go:145 - method *Env.newClientWithKeys
- env.go:87 - method *Env.newServer

**Return (1)**:
- env.go:246 - function timeoutContext

### disc.APIClient
**Field (2)**:
- env.go:27 - field d
- env.go:168 - struct field

**Return (1)**:
- env.go:168 - method *Env.Discovery

### dmsg.Client
**Field (4)**:
- env.go:207 - struct field
- dmsg_client_test.go:196 - field c
- dmsg_client_test.go:213 - field lc
- dmsg_client_test.go:146 - field clients

**Parameter (3)**:
- dmsg_client_test.go:213 - function checkRemoteClients
- dmsg_client_test.go:146 - function makeAdvanceClientFunc
- dmsg_client_test.go:196 - function listenAndDiscard

**Return (5)**:
- env.go:207 - method *Env.ClientOfPK
- env.go:173 - method *Env.AllClients
- env.go:123 - method *Env.NewClient
- env.go:145 - method *Env.newClientWithKeys
- env.go:135 - method *Env.NewClientWithKeys

**Variable (1)**:
- dmsg_client_test.go:108 - variable src

### dmsg.Server
**Field (2)**:
- env.go:77 - struct field
- env.go:28 - field s

**Return (3)**:
- env.go:190 - method *Env.AllServers
- env.go:87 - method *Env.newServer
- env.go:77 - method *Env.NewServer

### error
**Field (1)**:
- env.go:77 - struct field

**Return (6)**:
- env.go:77 - method *Env.NewServer
- env.go:145 - method *Env.newClientWithKeys
- env.go:87 - method *Env.newServer
- env.go:53 - method *Env.Startup
- env.go:135 - method *Env.NewClientWithKeys
- env.go:123 - method *Env.NewClient

### net.Conn
**Field (1)**:
- dmsg_client_test.go:174 - field conn

**Parameter (1)**:
- dmsg_client_test.go:174 - function continuousRandomWrite

---

## pkg/ioutil
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/pkg/ioutil
**Interface Usages**: 4

### bytes.Buffer
**Field (1)**:
- buf_read.go:11 - field buf

**Parameter (1)**:
- buf_read.go:11 - function BufRead

### error
**Field (1)**:
- buf_read.go:11 - struct field

**Return (1)**:
- buf_read.go:11 - function BufRead

---

## pkg/noise
**Path**: /Users/tayyab/development/sythtask/repos/dmsg/pkg/noise
**Interface Usages**: 75

### Conn
**Field (2)**:
- net.go:176 - field c
- net.go:167 - struct field

**Return (2)**:
- net.go:167 - function WrapConn
- net_test.go:311 - function prepareConns

### Listener
**Field (2)**:
- net.go:217 - field ml
- net.go:211 - struct field

**Return (1)**:
- net.go:211 - function WrapListener

### RPCClientDialer
**Field (2)**:
- net.go:138 - field d
- net.go:55 - struct field

**Return (1)**:
- net.go:55 - function NewRPCClientDialer

### ReadWriter
**Field (3)**:
- read_writer.go:200 - field rw
- net.go:163 - field ns
- read_writer.go:66 - struct field

**Return (1)**:
- read_writer.go:66 - function NewReadWriter

### bufio.Reader
**Field (2)**:
- read_writer.go:210 - field r
- read_writer.go:55 - field rawInput

**Parameter (3)**:
- read_writer.go:210 - function InitiatorHandshake
- read_writer.go:237 - function ResponderHandshake
- read_writer.go:279 - function ReadRawFrame

### bytes.Buffer
**Field (1)**:
- read_writer.go:56 - field input

### error
**Field (5)**:
- noise.go:50 - struct field
- read_writer.go:58 - field rErr
- read_writer_test.go:19 - field err
- read_writer.go:61 - field wErr
- net_test.go:154 - field Err

**Parameter (2)**:
- read_writer.go:108 - method *ReadWriter.processReadError
- read_writer.go:307 - function isTemp

**Return (25)**:
- noise.go:81 - function KKAndSecp256k1
- read_writer.go:74 - method *ReadWriter.Read
- read_writer.go:176 - method *ReadWriter.Handshake
- net.go:181 - method *Conn.Write
- net_test.go:25 - method *TestRPC.Add
- net.go:176 - method *Conn.Read
- read_writer.go:210 - function InitiatorHandshake
- read_writer.go:125 - method *ReadWriter.Write
- net.go:167 - function WrapConn
- read_writer.go:108 - method *ReadWriter.processReadError
- noise.go:103 - method *Noise.MakeHandshakeMessage
- net.go:103 - method *RPCClientDialer.establishConn
- read_writer.go:237 - function ResponderHandshake
- net.go:217 - method *Listener.Accept
- net.go:87 - method *RPCClientDialer.Close
- noise.go:114 - method *Noise.ProcessHandshakeMessage
- noise.go:50 - function New
- read_writer.go:265 - function WriteRawFrame
- net.go:62 - method *RPCClientDialer.Run
- noise.go:88 - function XKAndSecp256k1
- read_writer.go:48 - method *netError.Unwrap
- read_writer.go:279 - function ReadRawFrame
- dh.go:15 - method Secp256k1.GenerateKeypair
- noise.go:170 - method *Noise.DecryptWithNonceMap
- noise.go:154 - method *Noise.DecryptUnsafe

**Variable (1)**:
- net_test.go:284 - variable err

### io.ReadWriter
**Field (2)**:
- read_writer.go:66 - field rw
- read_writer.go:52 - field origin

**Parameter (1)**:
- read_writer.go:66 - function NewReadWriter

### io.Reader
**Field (1)**:
- dh.go:15 - field _

**Parameter (1)**:
- dh.go:15 - method Secp256k1.GenerateKeypair

### io.Writer
**Field (1)**:
- read_writer.go:265 - field w

**Parameter (3)**:
- read_writer.go:265 - function WriteRawFrame
- read_writer.go:237 - function ResponderHandshake
- read_writer.go:210 - function InitiatorHandshake

### net.Conn
**Embedded (1)**:
- net.go:161 - struct Conn

**Field (2)**:
- net.go:49 - field conn
- net.go:217 - struct field

**Parameter (2)**:
- net.go:167 - function WrapConn
- net.go:123 - method *RPCClientDialer.setConn

**Return (1)**:
- net.go:217 - method *Listener.Accept

### net.Listener
**Embedded (1)**:
- net.go:202 - struct Listener

**Field (2)**:
- net.go:211 - field lis
- net.go:203 - struct field

**Parameter (1)**:
- net.go:211 - function WrapListener

**Variable (1)**:
- net_test.go:39 - variable l

### rpc.Server
**Field (1)**:
- net.go:62 - field srv

**Parameter (1)**:
- net.go:62 - method *RPCClientDialer.Run

---

