# Dmsg Compilation Unit Import/Export Relationships

## Overview

- **Total Compilation Units**: 64

## Part A: Dependencies (What depends on each compilation unit)

### `.`

**Imported by**: None

### `cmd/conf`

**Imported by**: None

### `cmd/conf/commands`

**Imported by (2 packages)**:

- `cmd/conf`
- `cmd/dmsg/commands`

### `cmd/dial`

**Imported by**: None

### `cmd/dial/commands`

**Imported by (2 packages)**:

- `cmd/dial`
- `cmd/dmsg/commands`

### `cmd/dmsg`

**Imported by**: None

### `cmd/dmsg-discovery`

**Imported by**: None

### `cmd/dmsg-discovery/commands`

**Imported by (2 packages)**:

- `cmd/dmsg-discovery`
- `cmd/dmsg/commands`

### `cmd/dmsg-server`

**Imported by**: None

### `cmd/dmsg-server/commands`

**Imported by (2 packages)**:

- `cmd/dmsg-server`
- `cmd/dmsg/commands`

### `cmd/dmsg-server/commands/config`

**Imported by (1 packages)**:

- `cmd/dmsg-server/commands`

### `cmd/dmsg-server/commands/start`

**Imported by (1 packages)**:

- `cmd/dmsg-server/commands`

### `cmd/dmsg-socks5`

**Imported by**: None

### `cmd/dmsg-socks5/commands`

**Imported by (2 packages)**:

- `cmd/dmsg-socks5`
- `cmd/dmsg/commands`

### `cmd/dmsg/commands`

**Imported by (1 packages)**:

- `cmd/dmsg`

### `cmd/dmsgcurl`

**Imported by**: None

### `cmd/dmsgcurl/commands`

**Imported by (2 packages)**:

- `cmd/dmsg/commands`
- `cmd/dmsgcurl`

### `cmd/dmsghttp`

**Imported by**: None

### `cmd/dmsghttp/commands`

**Imported by (2 packages)**:

- `cmd/dmsg/commands`
- `cmd/dmsghttp`

### `cmd/dmsgip`

**Imported by**: None

### `cmd/dmsgip/commands`

**Imported by (2 packages)**:

- `cmd/dmsg/commands`
- `cmd/dmsgip`

### `cmd/dmsgpty-cli`

**Imported by**: None

### `cmd/dmsgpty-cli/commands`

**Imported by (2 packages)**:

- `cmd/dmsg/commands`
- `cmd/dmsgpty-cli`

### `cmd/dmsgpty-host`

**Imported by**: None

### `cmd/dmsgpty-host/commands`

**Imported by (2 packages)**:

- `cmd/dmsg/commands`
- `cmd/dmsgpty-host`

### `cmd/dmsgpty-ui`

**Imported by**: None

### `cmd/dmsgpty-ui/commands`

**Imported by (2 packages)**:

- `cmd/dmsg/commands`
- `cmd/dmsgpty-ui`

### `cmd/dmsgweb`

**Imported by**: None

### `cmd/dmsgweb/commands`

**Imported by (2 packages)**:

- `cmd/dmsg/commands`
- `cmd/dmsgweb`

### `examples/basics`

**Imported by**: None

### `examples/dmsgcurl/dmsg-example-http-server`

**Imported by**: None

### `examples/dmsgcurl/gen-keys`

**Imported by**: None

### `examples/dmsghttp`

**Imported by**: None

### `examples/dmsghttp-client`

**Imported by**: None

### `examples/dmsgtcp`

**Imported by**: None

### `examples/dmsgweb`

**Imported by**: None

### `examples/dmsgweb/commands`

**Imported by (1 packages)**:

- `examples/dmsgweb`

### `examples/gen-keys`

**Imported by**: None

### `examples/http`

**Imported by**: None

### `examples/proxified`

**Imported by**: None

### `examples/tcp`

**Imported by**: None

### `examples/tcp-multi-proxy-dmsg`

**Imported by**: None

### `examples/tcp-proxy`

**Imported by**: None

### `examples/tcp-proxy-dmsg`

**Imported by**: None

### `examples/tcp-reverse-proxy-dmsg`

**Imported by**: None

### `internal/cli`

**Imported by (8 packages)**:

- `cmd/dial/commands`
- `cmd/dmsg-socks5/commands`
- `cmd/dmsgcurl/commands`
- `cmd/dmsghttp/commands`
- `cmd/dmsgip/commands`
- `cmd/dmsgweb/commands`
- `examples/dmsghttp-client`
- `examples/dmsgtcp`

### `internal/discmetrics`

**Imported by (2 packages)**:

- `cmd/dmsg-discovery/commands`
- `internal/dmsg-discovery/api`

### `internal/dmsg-discovery/api`

**Imported by (1 packages)**:

- `cmd/dmsg-discovery/commands`

### `internal/dmsg-discovery/store`

**Imported by (2 packages)**:

- `cmd/dmsg-discovery/commands`
- `internal/dmsg-discovery/api`

### `internal/dmsg-server/api`

**Imported by (1 packages)**:

- `cmd/dmsg-server/commands/start`

### `internal/flags`

**Imported by (5 packages)**:

- `cmd/dial/commands`
- `cmd/dmsgcurl/commands`
- `cmd/dmsghttp/commands`
- `cmd/dmsgweb/commands`
- `internal/cli`

### `internal/fsutil`

**Imported by (1 packages)**:

- `cmd/dmsgpty-host/commands`

### `internal/servermetrics`

**Imported by (3 packages)**:

- `cmd/dmsg-server/commands/start`
- `internal/dmsg-server/api`
- `pkg/dmsg`

### `pkg/direct`

**Imported by (2 packages)**:

- `cmd/dmsg-discovery/commands`
- `internal/cli`

### `pkg/disc`

**Imported by (22 packages)**:

- `cmd/dial/commands`
- `cmd/dmsg-discovery/commands`
- `cmd/dmsg-server/commands/start`
- `cmd/dmsgcurl/commands`
- `cmd/dmsgpty-host/commands`
- `examples/basics`
- `examples/dmsgcurl/dmsg-example-http-server`
- `examples/dmsghttp`
- `examples/dmsgweb/commands`
- `examples/proxified`
- `examples/tcp-multi-proxy-dmsg`
- `examples/tcp-proxy-dmsg`
- `examples/tcp-reverse-proxy-dmsg`
- `internal/cli`
- `internal/dmsg-discovery/api`
- `internal/dmsg-discovery/store`
- `pkg/direct`
- `pkg/disc`
- `pkg/dmsg`
- `pkg/dmsgcurl`
- `pkg/dmsghttp`
- `pkg/dmsgtest`

### `pkg/dmsg`

**Imported by (32 packages)**:

- `cmd/conf/commands`
- `cmd/dial/commands`
- `cmd/dmsg-discovery/commands`
- `cmd/dmsg-server/commands/start`
- `cmd/dmsg-socks5/commands`
- `cmd/dmsgcurl/commands`
- `cmd/dmsghttp/commands`
- `cmd/dmsgip/commands`
- `cmd/dmsgpty-cli/commands`
- `cmd/dmsgpty-host/commands`
- `cmd/dmsgweb/commands`
- `examples/basics`
- `examples/dmsgcurl/dmsg-example-http-server`
- `examples/dmsghttp`
- `examples/dmsghttp-client`
- `examples/dmsgtcp`
- `examples/dmsgweb/commands`
- `examples/proxified`
- `examples/tcp-multi-proxy-dmsg`
- `examples/tcp-proxy-dmsg`
- `examples/tcp-reverse-proxy-dmsg`
- `internal/cli`
- `internal/dmsg-discovery/api`
- `internal/dmsg-discovery/store`
- `internal/dmsg-server/api`
- `internal/flags`
- `pkg/direct`
- `pkg/dmsgcurl`
- `pkg/dmsghttp`
- `pkg/dmsgpty`
- `pkg/dmsgserver`
- `pkg/dmsgtest`

### `pkg/dmsgctrl`

**Imported by**: None

### `pkg/dmsgcurl`

**Imported by**: None

### `pkg/dmsghttp`

**Imported by (8 packages)**:

- `cmd/dmsg-discovery/commands`
- `cmd/dmsgcurl/commands`
- `cmd/dmsgweb/commands`
- `examples/dmsghttp-client`
- `examples/dmsgweb/commands`
- `internal/cli`
- `pkg/dmsgcurl`
- `pkg/dmsghttp`

### `pkg/dmsgpty`

**Imported by (4 packages)**:

- `cmd/dmsgpty-cli/commands`
- `cmd/dmsgpty-host/commands`
- `cmd/dmsgpty-ui/commands`
- `pkg/dmsgpty`

### `pkg/dmsgserver`

**Imported by (2 packages)**:

- `cmd/dmsg-server/commands/config`
- `cmd/dmsg-server/commands/start`

### `pkg/dmsgtest`

**Imported by (1 packages)**:

- `pkg/dmsgpty`

### `pkg/ioutil`

**Imported by (1 packages)**:

- `pkg/noise`

### `pkg/noise`

**Imported by (1 packages)**:

- `pkg/dmsg`

## Part B: Imports (What each compilation unit depends on)

### `.`

**Total Imports**: 0

*No imports*

### `cmd/conf`

**Total Imports**: 2

**Internal Dependencies (1)**:

- `cmd/conf/commands`

**External Dependencies (1)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/flags`

### `cmd/conf/commands`

**Total Imports**: 4

**Internal Dependencies (1)**:

- `pkg/dmsg`

**External Dependencies (2)**:

- `github.com/bitfield/script`
- `github.com/spf13/cobra`

**Standard Library (1)**:

- `log`

### `cmd/dial`

**Total Imports**: 2

**Internal Dependencies (1)**:

- `cmd/dial/commands`

**External Dependencies (1)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/flags`

### `cmd/dial/commands`

**Total Imports**: 20

**Internal Dependencies (4)**:

- `internal/cli`
- `internal/flags`
- `pkg/disc`
- `pkg/dmsg`

**External Dependencies (7)**:

- `github.com/chen3feng/safecast`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/buildinfo`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/calvin`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cmdutil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/spf13/cobra`

**Standard Library (9)**:

- `context`
- `fmt`
- `log`
- `net/http`
- `os`
- `path/filepath`
- `strconv`
- `strings`
- `time`

### `cmd/dmsg`

**Total Imports**: 2

**Internal Dependencies (1)**:

- `cmd/dmsg/commands`

**External Dependencies (1)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/flags`

### `cmd/dmsg-discovery`

**Total Imports**: 2

**Internal Dependencies (1)**:

- `cmd/dmsg-discovery/commands`

**External Dependencies (1)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/flags`

### `cmd/dmsg-discovery/commands`

**Total Imports**: 25

**Internal Dependencies (7)**:

- `internal/discmetrics`
- `internal/dmsg-discovery/api`
- `internal/dmsg-discovery/store`
- `pkg/direct`
- `pkg/disc`
- `pkg/dmsg`
- `pkg/dmsghttp`

**External Dependencies (8)**:

- `github.com/pires/go-proxyproto`
- `github.com/sirupsen/logrus`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/buildinfo`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cmdutil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/metricsutil`
- `github.com/spf13/cobra`

**Standard Library (10)**:

- `context`
- `errors`
- `fmt`
- `log`
- `net`
- `net/http`
- `os`
- `path/filepath`
- `strings`
- `time`

### `cmd/dmsg-server`

**Total Imports**: 2

**Internal Dependencies (1)**:

- `cmd/dmsg-server/commands`

**External Dependencies (1)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/flags`

### `cmd/dmsg-server/commands`

**Total Imports**: 9

**Internal Dependencies (2)**:

- `cmd/dmsg-server/commands/config`
- `cmd/dmsg-server/commands/start`

**External Dependencies (2)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/buildinfo`
- `github.com/spf13/cobra`

**Standard Library (5)**:

- `fmt`
- `log`
- `os`
- `path/filepath`
- `strings`

### `cmd/dmsg-server/commands/config`

**Total Imports**: 4

**Internal Dependencies (1)**:

- `pkg/dmsgserver`

**External Dependencies (3)**:

- `github.com/sirupsen/logrus`
- `github.com/skycoin/skycoin/src/util/logging`
- `github.com/spf13/cobra`

### `cmd/dmsg-server/commands/start`

**Total Imports**: 20

**Internal Dependencies (5)**:

- `internal/dmsg-server/api`
- `internal/servermetrics`
- `pkg/disc`
- `pkg/dmsg`
- `pkg/dmsgserver`

**External Dependencies (7)**:

- `github.com/go-chi/chi/v5`
- `github.com/go-chi/chi/v5/middleware`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/buildinfo`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cmdutil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/metricsutil`
- `github.com/spf13/cobra`

**Standard Library (8)**:

- `context`
- `errors`
- `io`
- `log`
- `net/http`
- `net/url`
- `os`
- `strconv`

### `cmd/dmsg-socks5`

**Total Imports**: 2

**Internal Dependencies (1)**:

- `cmd/dmsg-socks5/commands`

**External Dependencies (1)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/flags`

### `cmd/dmsg-socks5/commands`

**Total Imports**: 17

**Internal Dependencies (2)**:

- `internal/cli`
- `pkg/dmsg`

**External Dependencies (7)**:

- `github.com/confiant-inc/go-socks5`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/buildinfo`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/calvin`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cmdutil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/spf13/cobra`

**Standard Library (8)**:

- `context`
- `fmt`
- `log`
- `net/http`
- `os`
- `path/filepath`
- `strings`
- `time`

### `cmd/dmsg/commands`

**Total Imports**: 20

**Internal Dependencies (12)**:

- `cmd/conf/commands`
- `cmd/dial/commands`
- `cmd/dmsg-discovery/commands`
- `cmd/dmsg-server/commands`
- `cmd/dmsg-socks5/commands`
- `cmd/dmsgcurl/commands`
- `cmd/dmsghttp/commands`
- `cmd/dmsgip/commands`
- `cmd/dmsgpty-cli/commands`
- `cmd/dmsgpty-host/commands`
- `cmd/dmsgpty-ui/commands`
- `cmd/dmsgweb/commands`

**External Dependencies (1)**:

- `github.com/spf13/cobra`

**Standard Library (7)**:

- `fmt`
- `log`
- `os`
- `os/signal`
- `path/filepath`
- `strings`
- `syscall`

### `cmd/dmsgcurl`

**Total Imports**: 2

**Internal Dependencies (1)**:

- `cmd/dmsgcurl/commands`

**External Dependencies (1)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/flags`

### `cmd/dmsgcurl/commands`

**Total Imports**: 26

**Internal Dependencies (5)**:

- `internal/cli`
- `internal/flags`
- `pkg/disc`
- `pkg/dmsg`
- `pkg/dmsghttp`

**External Dependencies (7)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/buildinfo`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/calvin`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cmdutil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/spf13/cobra`
- `golang.org/x/net/proxy`

**Standard Library (14)**:

- `context`
- `errors`
- `fmt`
- `io`
- `io/fs`
- `log`
- `net`
- `net/http`
- `net/url`
- `os`
- `path/filepath`
- `strings`
- `sync/atomic`
- `time`

### `cmd/dmsghttp`

**Total Imports**: 2

**Internal Dependencies (1)**:

- `cmd/dmsghttp/commands`

**External Dependencies (1)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/flags`

### `cmd/dmsghttp/commands`

**Total Imports**: 21

**Internal Dependencies (3)**:

- `internal/cli`
- `internal/flags`
- `pkg/dmsg`

**External Dependencies (8)**:

- `github.com/gin-gonic/gin`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/buildinfo`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/calvin`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cmdutil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/spf13/cobra`
- `golang.org/x/net/proxy`

**Standard Library (10)**:

- `context`
- `fmt`
- `log`
- `net`
- `net/http`
- `os`
- `path/filepath`
- `strings`
- `sync`
- `time`

### `cmd/dmsgip`

**Total Imports**: 2

**Internal Dependencies (1)**:

- `cmd/dmsgip/commands`

**External Dependencies (1)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/flags`

### `cmd/dmsgip/commands`

**Total Imports**: 16

**Internal Dependencies (2)**:

- `internal/cli`
- `pkg/dmsg`

**External Dependencies (7)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/buildinfo`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/calvin`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cmdutil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/spf13/cobra`
- `golang.org/x/net/proxy`

**Standard Library (7)**:

- `context`
- `fmt`
- `log`
- `net/http`
- `os`
- `path/filepath`
- `strings`

### `cmd/dmsgpty-cli`

**Total Imports**: 2

**Internal Dependencies (1)**:

- `cmd/dmsgpty-cli/commands`

**External Dependencies (1)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/flags`

### `cmd/dmsgpty-cli/commands`

**Total Imports**: 14

**Internal Dependencies (2)**:

- `pkg/dmsg`
- `pkg/dmsgpty`

**External Dependencies (5)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/buildinfo`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/calvin`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cmdutil`
- `github.com/spf13/cobra`

**Standard Library (7)**:

- `context`
- `encoding/json`
- `fmt`
- `log`
- `os`
- `path/filepath`
- `strings`

### `cmd/dmsgpty-host`

**Total Imports**: 2

**Internal Dependencies (1)**:

- `cmd/dmsgpty-host/commands`

**External Dependencies (1)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/flags`

### `cmd/dmsgpty-host/commands`

**Total Imports**: 22

**Internal Dependencies (4)**:

- `internal/fsutil`
- `pkg/disc`
- `pkg/dmsg`
- `pkg/dmsgpty`

**External Dependencies (8)**:

- `github.com/json-iterator/go`
- `github.com/sirupsen/logrus`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/buildinfo`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/calvin`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cmdutil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/spf13/cobra`

**Standard Library (10)**:

- `context`
- `fmt`
- `log`
- `net`
- `net/http`
- `os`
- `path/filepath`
- `strconv`
- `strings`
- `sync`

### `cmd/dmsgpty-ui`

**Total Imports**: 2

**Internal Dependencies (1)**:

- `cmd/dmsgpty-ui/commands`

**External Dependencies (1)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/flags`

### `cmd/dmsgpty-ui/commands`

**Total Imports**: 11

**Internal Dependencies (1)**:

- `pkg/dmsgpty`

**External Dependencies (3)**:

- `github.com/sirupsen/logrus`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/buildinfo`
- `github.com/spf13/cobra`

**Standard Library (7)**:

- `fmt`
- `log`
- `net/http`
- `os`
- `path/filepath`
- `strings`
- `time`

### `cmd/dmsgweb`

**Total Imports**: 2

**Internal Dependencies (1)**:

- `cmd/dmsgweb/commands`

**External Dependencies (1)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/flags`

### `cmd/dmsgweb/commands`

**Total Imports**: 30

**Internal Dependencies (4)**:

- `internal/cli`
- `internal/flags`
- `pkg/dmsg`
- `pkg/dmsghttp`

**External Dependencies (10)**:

- `github.com/bitfield/script`
- `github.com/chen3feng/safecast`
- `github.com/confiant-inc/go-socks5`
- `github.com/gin-gonic/gin`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/buildinfo`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cmdutil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/spf13/cobra`
- `golang.org/x/net/proxy`

**Standard Library (16)**:

- `context`
- `fmt`
- `io`
- `log`
- `net`
- `net/http`
- `net/http/httputil`
- `net/url`
- `os`
- `path/filepath`
- `regexp`
- `runtime`
- `strconv`
- `strings`
- `sync`
- `time`

### `examples/basics`

**Total Imports**: 7

**Internal Dependencies (2)**:

- `pkg/disc`
- `pkg/dmsg`

**External Dependencies (2)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `golang.org/x/net/nettest`

**Standard Library (3)**:

- `context`
- `log`
- `time`

### `examples/dmsgcurl/dmsg-example-http-server`

**Total Imports**: 12

**Internal Dependencies (2)**:

- `pkg/disc`
- `pkg/dmsg`

**External Dependencies (3)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cmdutil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`

**Standard Library (7)**:

- `context`
- `flag`
- `fmt`
- `net/http`
- `os`
- `path`
- `time`

### `examples/dmsgcurl/gen-keys`

**Total Imports**: 2

**External Dependencies (1)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`

**Standard Library (1)**:

- `fmt`

### `examples/dmsghttp`

**Total Imports**: 13

**Internal Dependencies (2)**:

- `pkg/disc`
- `pkg/dmsg`

**External Dependencies (5)**:

- `github.com/ivanpirog/coloredcobra`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cmdutil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/spf13/cobra`

**Standard Library (6)**:

- `context`
- `log`
- `net/http`
- `os`
- `strings`
- `time`

### `examples/dmsghttp-client`

**Total Imports**: 11

**Internal Dependencies (3)**:

- `internal/cli`
- `pkg/dmsg`
- `pkg/dmsghttp`

**External Dependencies (2)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`

**Standard Library (6)**:

- `context`
- `fmt`
- `io`
- `net/http`
- `net/url`
- `os`

### `examples/dmsgtcp`

**Total Imports**: 15

**Internal Dependencies (2)**:

- `internal/cli`
- `pkg/dmsg`

**External Dependencies (5)**:

- `github.com/ivanpirog/coloredcobra`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cmdutil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/spf13/cobra`

**Standard Library (8)**:

- `context`
- `log`
- `net`
- `net/http`
- `os`
- `os/signal`
- `strings`
- `syscall`

### `examples/dmsgweb`

**Total Imports**: 3

**Internal Dependencies (1)**:

- `examples/dmsgweb/commands`

**External Dependencies (2)**:

- `github.com/ivanpirog/coloredcobra`
- `github.com/spf13/cobra`

### `examples/dmsgweb/commands`

**Total Imports**: 24

**Internal Dependencies (3)**:

- `pkg/disc`
- `pkg/dmsg`
- `pkg/dmsghttp`

**External Dependencies (8)**:

- `github.com/confiant-inc/go-socks5`
- `github.com/gin-gonic/gin`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/buildinfo`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cmdutil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/spf13/cobra`
- `golang.org/x/net/proxy`

**Standard Library (13)**:

- `context`
- `fmt`
- `io`
- `log`
- `net`
- `net/http`
- `os`
- `os/signal`
- `regexp`
- `strings`
- `sync`
- `syscall`
- `time`

### `examples/gen-keys`

**Total Imports**: 2

**External Dependencies (1)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`

**Standard Library (1)**:

- `fmt`

### `examples/http`

**Total Imports**: 5

**Standard Library (5)**:

- `fmt`
- `log`
- `net`
- `net/http`
- `os`

### `examples/proxified`

**Total Imports**: 8

**Internal Dependencies (2)**:

- `pkg/disc`
- `pkg/dmsg`

**External Dependencies (3)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `golang.org/x/net/proxy`

**Standard Library (3)**:

- `context`
- `net/http`
- `time`

### `examples/tcp`

**Total Imports**: 3

**Standard Library (3)**:

- `log`
- `net`
- `os`

### `examples/tcp-multi-proxy-dmsg`

**Total Imports**: 13

**Internal Dependencies (2)**:

- `pkg/disc`
- `pkg/dmsg`

**External Dependencies (5)**:

- `github.com/ivanpirog/coloredcobra`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cmdutil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/spf13/cobra`

**Standard Library (6)**:

- `context`
- `fmt`
- `io`
- `net`
- `net/http`
- `sync`

### `examples/tcp-proxy`

**Total Imports**: 7

**Standard Library (7)**:

- `fmt`
- `io`
- `log`
- `net`
- `os`
- `strconv`
- `sync`

### `examples/tcp-proxy-dmsg`

**Total Imports**: 14

**Internal Dependencies (2)**:

- `pkg/disc`
- `pkg/dmsg`

**External Dependencies (5)**:

- `github.com/ivanpirog/coloredcobra`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cmdutil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/spf13/cobra`

**Standard Library (7)**:

- `context`
- `fmt`
- `io`
- `net`
- `net/http`
- `os`
- `sync`

### `examples/tcp-reverse-proxy-dmsg`

**Total Imports**: 20

**Internal Dependencies (2)**:

- `pkg/disc`
- `pkg/dmsg`

**External Dependencies (5)**:

- `github.com/ivanpirog/coloredcobra`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cmdutil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/spf13/cobra`

**Standard Library (13)**:

- `context`
- `fmt`
- `io`
- `log`
- `net`
- `net/http`
- `os`
- `os/signal`
- `path/filepath`
- `strconv`
- `strings`
- `sync`
- `syscall`

### `internal/cli`

**Total Imports**: 12

**Internal Dependencies (5)**:

- `internal/flags`
- `pkg/direct`
- `pkg/disc`
- `pkg/dmsg`
- `pkg/dmsghttp`

**External Dependencies (2)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`

**Standard Library (5)**:

- `context`
- `fmt`
- `io`
- `log`
- `net/http`

### `internal/discmetrics`

**Total Imports**: 1

**External Dependencies (1)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/metricsutil`

### `internal/dmsg-discovery/api`

**Total Imports**: 26

**Internal Dependencies (4)**:

- `internal/discmetrics`
- `internal/dmsg-discovery/store`
- `pkg/disc`
- `pkg/dmsg`

**External Dependencies (12)**:

- `github.com/go-chi/chi/v5`
- `github.com/go-chi/chi/v5/middleware`
- `github.com/json-iterator/go`
- `github.com/sirupsen/logrus`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/buildinfo`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/httputil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/metricsutil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/networkmonitor`
- `github.com/stretchr/testify/assert`
- `github.com/stretchr/testify/require`

**Standard Library (10)**:

- `bytes`
- `context`
- `fmt`
- `io`
- `net`
- `net/http`
- `net/http/httptest`
- `sort`
- `testing`
- `time`

### `internal/dmsg-discovery/store`

**Total Imports**: 15

**Internal Dependencies (2)**:

- `pkg/disc`
- `pkg/dmsg`

**External Dependencies (7)**:

- `github.com/go-redis/redis/v8`
- `github.com/json-iterator/go`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/netutil`
- `github.com/stretchr/testify/assert`
- `github.com/stretchr/testify/require`

**Standard Library (6)**:

- `context`
- `errors`
- `sort`
- `sync`
- `testing`
- `time`

### `internal/dmsg-server/api`

**Total Imports**: 17

**Internal Dependencies (2)**:

- `internal/servermetrics`
- `pkg/dmsg`

**External Dependencies (7)**:

- `github.com/go-chi/chi/v5`
- `github.com/pires/go-proxyproto`
- `github.com/sirupsen/logrus`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/buildinfo`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/httputil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`

**Standard Library (8)**:

- `context`
- `encoding/json`
- `math`
- `math/big`
- `net`
- `net/http`
- `sync`
- `time`

### `internal/flags`

**Total Imports**: 3

**Internal Dependencies (1)**:

- `pkg/dmsg`

**External Dependencies (1)**:

- `github.com/spf13/cobra`

**Standard Library (1)**:

- `os`

### `internal/fsutil`

**Total Imports**: 1

**Standard Library (1)**:

- `os`

### `internal/servermetrics`

**Total Imports**: 3

**External Dependencies (2)**:

- `github.com/VictoriaMetrics/metrics`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/metricsutil`

**Standard Library (1)**:

- `fmt`

### `pkg/direct`

**Total Imports**: 6

**Internal Dependencies (2)**:

- `pkg/disc`
- `pkg/dmsg`

**External Dependencies (2)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`

**Standard Library (2)**:

- `context`
- `sync`

### `pkg/disc`

**Total Imports**: 18

**Internal Dependencies (1)**:

- `pkg/disc`

**External Dependencies (5)**:

- `github.com/json-iterator/go`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/stretchr/testify/assert`
- `github.com/stretchr/testify/require`

**Standard Library (12)**:

- `bytes`
- `context`
- `errors`
- `fmt`
- `io`
- `log`
- `net/http`
- `os`
- `strings`
- `sync`
- `testing`
- `time`

### `pkg/dmsg`

**Total Imports**: 34

**Internal Dependencies (3)**:

- `internal/servermetrics`
- `pkg/disc`
- `pkg/noise`

**External Dependencies (11)**:

- `github.com/chen3feng/safecast`
- `github.com/hashicorp/yamux`
- `github.com/sirupsen/logrus`
- `github.com/skycoin/skywire`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/netutil`
- `github.com/stretchr/testify/assert`
- `github.com/stretchr/testify/require`
- `golang.org/x/net/nettest`
- `golang.org/x/net/proxy`

**Standard Library (20)**:

- `bytes`
- `context`
- `crypto/rand`
- `encoding/binary`
- `encoding/gob`
- `encoding/json`
- `errors`
- `fmt`
- `io`
- `log`
- `math/big`
- `math/rand`
- `net`
- `regexp`
- `runtime`
- `strings`
- `sync`
- `sync/atomic`
- `testing`
- `time`

### `pkg/dmsgctrl`

**Total Imports**: 10

**External Dependencies (2)**:

- `github.com/stretchr/testify/assert`
- `github.com/stretchr/testify/require`

**Standard Library (8)**:

- `context`
- `errors`
- `fmt`
- `io`
- `net`
- `sync`
- `testing`
- `time`

### `pkg/dmsgcurl`

**Total Imports**: 27

**Internal Dependencies (3)**:

- `pkg/disc`
- `pkg/dmsg`
- `pkg/dmsghttp`

**External Dependencies (11)**:

- `github.com/go-chi/chi/v5`
- `github.com/json-iterator/go`
- `github.com/sirupsen/logrus`
- `github.com/skycoin/skywire`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/buildinfo`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cmdutil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/stretchr/testify/assert`
- `github.com/stretchr/testify/require`
- `golang.org/x/net/nettest`

**Standard Library (13)**:

- `context`
- `encoding/json`
- `errors`
- `flag`
- `fmt`
- `io`
- `net/http`
- `net/url`
- `os`
- `path/filepath`
- `sync/atomic`
- `testing`
- `time`

### `pkg/dmsghttp`

**Total Imports**: 20

**Internal Dependencies (3)**:

- `pkg/disc`
- `pkg/dmsg`
- `pkg/dmsghttp`

**External Dependencies (8)**:

- `github.com/go-chi/chi/v5`
- `github.com/sirupsen/logrus`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cmdutil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/stretchr/testify/assert`
- `github.com/stretchr/testify/require`
- `golang.org/x/net/nettest`

**Standard Library (9)**:

- `bufio`
- `bytes`
- `context`
- `fmt`
- `io`
- `net`
- `net/http`
- `testing`
- `time`

### `pkg/dmsgpty`

**Total Imports**: 41

**Internal Dependencies (3)**:

- `pkg/dmsg`
- `pkg/dmsgpty`
- `pkg/dmsgtest`

**External Dependencies (12)**:

- `github.com/ActiveState/termtest/conpty`
- `github.com/coder/websocket`
- `github.com/creack/pty`
- `github.com/json-iterator/go`
- `github.com/sirupsen/logrus`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/httputil`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/stretchr/testify/require`
- `golang.org/x/net/nettest`
- `golang.org/x/sys/windows`
- `golang.org/x/term`

**Standard Library (26)**:

- `bufio`
- `bytes`
- `compress/gzip`
- `context`
- `errors`
- `fmt`
- `io`
- `io/fs`
- `log`
- `math`
- `net`
- `net/http`
- `net/rpc`
- `net/url`
- `os`
- `os/exec`
- `os/signal`
- `path`
- `path/filepath`
- `runtime`
- `strings`
- `sync`
- `sync/atomic`
- `syscall`
- `testing`
- `time`

### `pkg/dmsgserver`

**Total Imports**: 6

**Internal Dependencies (1)**:

- `pkg/dmsg`

**External Dependencies (2)**:

- `github.com/skycoin/skycoin/src/util/logging`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`

**Standard Library (3)**:

- `encoding/json`
- `os`
- `time`

### `pkg/dmsgtest`

**Total Imports**: 17

**Internal Dependencies (2)**:

- `pkg/disc`
- `pkg/dmsg`

**External Dependencies (6)**:

- `github.com/sirupsen/logrus`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/stretchr/testify/assert`
- `github.com/stretchr/testify/require`
- `golang.org/x/net/nettest`

**Standard Library (9)**:

- `context`
- `fmt`
- `io`
- `math/rand`
- `net`
- `sort`
- `sync`
- `testing`
- `time`

### `pkg/ioutil`

**Total Imports**: 2

**External Dependencies (1)**:

- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`

**Standard Library (1)**:

- `bytes`

### `pkg/noise`

**Total Imports**: 24

**Internal Dependencies (1)**:

- `pkg/ioutil`

**External Dependencies (8)**:

- `github.com/chen3feng/safecast`
- `github.com/skycoin/noise`
- `github.com/skycoin/skycoin/src/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/cipher`
- `github.com/skycoin/skywire/pkg/skywire-utilities/pkg/logging`
- `github.com/stretchr/testify/assert`
- `github.com/stretchr/testify/require`
- `golang.org/x/net/nettest`

**Standard Library (15)**:

- `bufio`
- `bytes`
- `crypto/rand`
- `encoding/binary`
- `errors`
- `fmt`
- `io`
- `log`
- `math/rand`
- `net`
- `net/rpc`
- `os`
- `sync`
- `testing`
- `time`

