
CREATE DATABASE IF NOT EXISTS `sistemasdevoto` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `sistemasdevoto`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `votos`
--

CREATE TABLE `votos` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(11) NOT NULL,
  `N_votos` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `votos`
--

INSERT INTO `votos` (`ID`, `Nombre`, `N_votos`) VALUES
(1, 'PRI', 0),
(2, 'PAN', 17),
(3, 'PRD', 6),
(4, 'NULO', 7);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `votos`
--
ALTER TABLE `votos`
  ADD PRIMARY KEY (`ID`);
--
-- Base de datos: `test`
--
